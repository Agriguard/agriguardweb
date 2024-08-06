import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const API_ENDPOINT = "http://178.128.240.96/auth/jwt/create";

  const { phone_number, password } = await request.json();

  console.log("Login request body:", { phone_number, password });

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone_number, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login error:", errorData);
      return NextResponse.json({ error: 'Login failed', details: errorData }, { status: response.status });
    }

    const { access, refresh } = await response.json();

    return NextResponse.json({
      message: 'Login successful',
      tokens: { access, refresh },
    });
  } catch (error) {
    console.error("Login request failed:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
