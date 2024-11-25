// // app/api/challenges/[id]/route.js
// import dbConnect from '../../../../lib/mongodb';
// import Challenge from '../../../../models/Challenge';

// export async function GET(req, { params }) {
//   await dbConnect();
//   const challenge = await Challenge.findById(params.id);
//   if (!challenge) {
//     return new Response(JSON.stringify({ error: 'Challenge not found' }), {
//       status: 404,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
//   return new Response(JSON.stringify(challenge), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }













import dbConnect from '../../../../lib/mongodb';
import Challenge from '../../../../models/Challenge';

export async function GET(req, { params }) {
  await dbConnect();
  const challenge = await Challenge.findById(params.id);
  if (!challenge) {
    return new Response(JSON.stringify({ error: 'Challenge not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response(JSON.stringify(challenge), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(req, { params }) {
  await dbConnect();
  const body = await req.json();
  const updatedChallenge = await Challenge.findByIdAndUpdate(params.id, body, { new: true });
  if (!updatedChallenge) {
    return new Response(JSON.stringify({ error: 'Challenge not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response(JSON.stringify(updatedChallenge), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}