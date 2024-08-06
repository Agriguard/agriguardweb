import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const token = cookies().get('access_token')?.value;
  console.log(`Access Token: ${token}`);
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { farmId, preferredAmount, userId } = await request.json();

  console.log(`Received farmId: ${farmId}, preferredAmount: ${preferredAmount}, userId: ${userId}`);

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const url = `http://178.128.240.96/market/bids/${userId}/create/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        aggregated_season: farmId,
        preferred_amount: preferredAmount,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create bid');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating bid:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
