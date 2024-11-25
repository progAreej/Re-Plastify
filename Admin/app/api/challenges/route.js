import dbConnect from '../../../lib/mongodb';
import Challenge from '../../../models/Challenge';

export async function GET(req) {
  await dbConnect();
  const challenges = await Challenge.find({});
  return new Response(JSON.stringify(challenges), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const challenge = new Challenge({
    ...body,
    status: 'pending',
    isApproved: true,
  });
  await challenge.save();
  return new Response(JSON.stringify(challenge), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}