
// import mongoose from 'mongoose';

// const completedChallengeSchema = new mongoose.Schema({
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User', // Assuming a 'User' model exists for users
//       required: true,
//     },
//     challengeId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Challenge', // Reference to the related challenge
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ['pending', 'completed', 'approved', 'rejected'], // Possible statuses
//       default: 'completed',
//     },
//     solutionVideo: {
//       type: String, // URL of the uploaded solution video
//       required: true,
//     },
//     submittedAt: {
//       type: Date,
//       default: Date.now, // Date when the solution was submitted
//     },
//   });
  
//   // Export the CompletedChallenge model
//   export default mongoose.models.CompletedChallenge || mongoose.model('CompletedChallenge', completedChallengeSchema);


import mongoose from 'mongoose';

const completedChallengeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
  status: {
    type: String,
    enum: ['pending', 'completed', 'approved', 'rejected'], // Ensure 'completed' is included
    default: 'completed',
  },
  solutionVideo: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.models.CompletedChallenge || mongoose.model('CompletedChallenge', completedChallengeSchema);
