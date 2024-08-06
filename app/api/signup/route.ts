import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const API_ENDPOINT = "http://178.128.240.96/auth/users/";
  const LOGIN_ENDPOINT = "http://178.128.240.96/auth/jwt/create";
  
  const { first_name, last_name, email, password, username, phone_number, pin, affiliation, user_type } = await request.json();

  const requestBody = {
    first_name,
    last_name,
    email,
    password,
    username,
    phone_number,
    pin,
    affiliation,
    user_type,
  };

  console.log("Signup request body:", requestBody);

  try {
    const signupResponse = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!signupResponse.ok) {
      const signupError = await signupResponse.json();
      console.error("Signup error:", signupError);
      return NextResponse.json({ error: 'Signup failed', details: signupError }, { status: signupResponse.status });
    }

    const signupResponseData = await signupResponse.json();
    console.log(`Response:`, signupResponseData)


    const loginResponse = await fetch(LOGIN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone_number,
        password,
      }),
    });

    if (!loginResponse.ok) {
      const loginError = await loginResponse.json();
      console.error("Login error:", loginError);
      return NextResponse.json({ error: 'Login failed', details: loginError }, { status: loginResponse.status });
    }

    const loginData = await loginResponse.json();
    const { access, refresh } = loginData;

    return NextResponse.json({
      message: 'Signup and login successful',
      data: { access, refresh, ...signupResponseData, ...requestBody },
    });
  } catch (error) {
    console.error("Signup or login request failed:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
