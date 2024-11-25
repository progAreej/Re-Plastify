// // app/api/orders/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '../../../lib/mongodb';
// import Order from '../../../models/Order';
// import { verifyToken } from '../../../utils/jwt';

// export async function GET(request) {
//   try {
//     await dbConnect();

//     // Get the token from the cookies
//     const token = request.cookies.get('token')?.value;

//     if (!token) {
//       return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
//     }

//     // Verify the token
//     const decoded = verifyToken(token);
//     if (!decoded) {
//       return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
//     }

//     // Fetch orders for the user
//     const orders = await Order.find({ user: decoded.id })
//       .sort({ createdAt: -1 })
//       .populate('products.product', 'name price');

//     return NextResponse.json({ orders });
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


















// app/api/orders/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Order from '../../../models/Order';
import { verifyToken } from '../../../utils/jwt';

export async function GET(request) {
  try {
    await dbConnect();

    // Get the token from the cookies
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Verify the token
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Fetch orders for the user with populated product details
    const orders = await Order.find({ user: decoded.id })
      .sort({ createdAt: -1 })
      .populate({
        path: 'products.product',
        select: 'name description price image'
      });

    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}