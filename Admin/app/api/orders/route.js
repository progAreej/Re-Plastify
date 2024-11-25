// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import Order from '@/models/Orders';


// export async function GET() {
//     try {
//         await dbConnect();
//         const session = await getServerSession(authOptions);

//         if (!session) {
//             return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//         }

//         const orders = await Order.find({ user: session.user.id })
//             .populate('user', 'username email')
//             .populate('products.product', 'name price');

//         return NextResponse.json(orders);
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

// export async function PUT(request) {
//     try {
//         await dbConnect();
//         const session = await getServerSession(authOptions);

//         if (!session) {
//             return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//         }

//         const { orderId, status } = await request.json();

//         const updatedOrder = await Order.findOneAndUpdate(
//             { _id: orderId, user: session.user.id },
//             { status },
//             { new: true }
//         ).populate('user', 'username email')
//          .populate('products.product', 'name price');

//         if (!updatedOrder) {
//             return NextResponse.json({ error: 'Order not found' }, { status: 404 });
//         }

//         return NextResponse.json(updatedOrder);
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }









import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Order from '@/models/Orders';

export async function GET() {
    try {
        await dbConnect();
        
        const orders = await Order.find({})
            .populate('user', 'username email')
            .populate('products.product', 'name price')
            .sort({ createdAt: -1 }); // Sort by newest first

        return NextResponse.json(orders);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        
        const { orderId, status } = await request.json();

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { status },
            { new: true }
        ).populate('user', 'username email')
         .populate('products.product', 'name price');

        if (!updatedOrder) {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        return NextResponse.json(updatedOrder);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}