import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://178.128.240.96/aggregated-seasons/', {cache: 'no-store'});
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data)
    return NextResponse.json(data, {
    });
  } catch (error) {
    return NextResponse.error();
  }
}
