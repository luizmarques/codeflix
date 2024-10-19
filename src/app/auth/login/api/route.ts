import { NextRequest, NextResponse } from 'next/server';
import { loginFormSchema } from '../../../lib/validations/loginFormSchema';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    console.log('email:' + email, 'password:' + password);

    return new NextResponse('It works');
    // eslint-disable-next-line
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(error.message, { status: 400 });
  }
}
