// import { NextResponse } from 'next/server';
// import dbConnect from '../../../lib/mongodb';
// import Contact from '../../../models/Contact';

// export async function POST(request) {
//   await dbConnect();
//   const body = await request.json();

//   try {
//     const newContact = new Contact(body);
//     await newContact.save();
    
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to save contact.' }, { status: 500 });
//   }
// }




// // app/api/contact/route.js
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
//  import mongoose from '../../../lib/mongodb';
//  import Contact from '../../../models/Contact';

// const ContactSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
// });

// const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'abedalmajedalajarmah@gmail.com',
//     pass: 'ndgx zdev lywb gohb'
//   },
// });

// export async function GET() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     const contacts = await Contact.find({});
//     return NextResponse.json(contacts);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
//   }
// }

// export async function POST(request) {
//   const { email, response } = await request.json();

//   const mailOptions = {
//     from: 'abedalmajedalajarmah@gmail.com',
//     to: email,
//     subject: 'Response to your contact message',
//     text: response,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: 'Email sent successfully' });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
//   }
// }













// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import connectDB from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'abedalmajedalajarmah@gmail.com',
    pass: 'ndgx zdev lywb gohb'
  },
});

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find({});
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}

export async function POST(request) {
  const { email, response } = await request.json();

  const mailOptions = {
    from: 'abedalmajedalajarmah@gmail.com',
    to: email,
    subject: 'Response to your contact message',
    text: response,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}