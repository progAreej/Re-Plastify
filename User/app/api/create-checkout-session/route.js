// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// import dbConnect from "../../../lib/mongodb";
// import Order from "../../../models/Order";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   const { items, paymentMethodId, customerDetails } = await req.json();

//   try {
//     await dbConnect();

//     const lineItems = items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           images: [item.image],
//         },
//         unit_amount: item.price * 100, // Stripe expects amounts in cents
//       },
//       quantity: item.quantity || 1,
//     }));

//     const customer = await stripe.customers.create({
//       name: customerDetails.name,
//       email: customerDetails.email,
//       address: {
//         line1: customerDetails.address,
//         city: customerDetails.city,
//         country: customerDetails.country,
//         postal_code: customerDetails.postalCode,
//       },
//     });

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: lineItems.reduce((total, item) => total + item.price_data.unit_amount * item.quantity, 0),
//       currency: "usd",
//       customer: customer.id,
//       payment_method: paymentMethodId,
//       off_session: true,
//       confirm: true,
//     });

//     const order = new Order({
//       user: customer.id, // You might want to replace this with the actual user ID if you have user authentication
//       products: items.map((item) => ({
//         product: item._id,
//         quantity: item.quantity || 1,
//       })),
//       totalAmount: paymentIntent.amount / 100, // Convert back to dollars
//       status: "processing",
//       stripeSessionId: paymentIntent.id,
//     });

//     await order.save();

//     return NextResponse.json({
//       clientSecret: paymentIntent.client_secret,
//       id: paymentIntent.id,
//     });
//   } catch (error) {
//     console.error("Error creating checkout session:", error);
//     return NextResponse.json(
//       { error: "Error creating checkout session" },
//       { status: 500 }
//     );
//   }
// }


















import { NextResponse } from "next/server";
import Stripe from "stripe";
import dbConnect from "../../../lib/mongodb";
import Order from "../../../models/Order";
import { verifyToken } from "../../../utils/jwt";
import { cookies } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  
  if (!token) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const decodedToken = verifyToken(token.value);
  if (!decodedToken) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const userId = decodedToken.id;
  const { items, paymentMethodId, customerDetails } = await req.json();

  try {
    await dbConnect();

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity || 1,
    }));

    const customer = await stripe.customers.create({
      name: customerDetails.name,
      email: customerDetails.email,
      address: {
        line1: customerDetails.address,
        city: customerDetails.city,
        country: customerDetails.country,
        postal_code: customerDetails.postalCode,
      },
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: lineItems.reduce((total, item) => total + item.price_data.unit_amount * item.quantity, 0),
      currency: "usd",
      customer: customer.id,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
    });

    const order = new Order({
      user: userId, // Use the authenticated user's ID
      products: items.map((item) => ({
        product: item._id,
        quantity: item.quantity || 1,
      })),
      totalAmount: paymentIntent.amount / 100,
      status: "processing",
      stripeSessionId: paymentIntent.id,
    });

    await order.save();

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}