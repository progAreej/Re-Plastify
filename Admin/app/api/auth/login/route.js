// import { NextResponse } from 'next/server';
// import dbConnect from '../../../../lib/mongodb';
// import Admin from '../../../../models/Admin';
// import { createToken } from '../../../../utils/jwt';
// import { cookies } from 'next/headers';

// export async function POST(request) {
//   await dbConnect();
//   const body = await request.json();

//   try {
//     const { email, password } = body;
//     const Admin = await Admin.findOne({ email }).select('+password');
//     if (!Admin || !(await Admin.matchPassword(password))) {
//       return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
//     }

//     // Create the token
//     const token = createToken(Admin._id);
    
 
//     cookies().set('token', token, { 
//       httpOnly: true, 
//       secure: process.env.NODE_ENV !== 'development',
//       sameSite: 'strict',
//       maxAge: 30 * 24 * 60 * 60, // 30 days
//       path: '/',
//     });

//     return NextResponse.json({ 
//       success: true, 
//       Admin: { id: Admin._id, Adminname: Admin.Adminname, email: Admin.email }, 
//       redirect: '/'  
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }





import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Admin from '../../../../models/Admin';
import { createToken } from '../../../../utils/jwt';
import { cookies } from 'next/headers';

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const { email, password } = body;
    const admin = await Admin.findOne({ email }).select('+password');
    
    if (!admin || !(await admin.matchPassword(password))) {
      return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 });
    }

    // Create the token
    const token = createToken(admin._id);
    
    // Set the token in an HTTP-only cookie
    cookies().set('token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    return NextResponse.json({ 
      success: true, 
      admin: { id: admin._id, email: admin.email }, 
      redirect: '/'  // Redirect to admin dashboard
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}












