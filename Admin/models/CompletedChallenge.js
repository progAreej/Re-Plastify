import mongoose from 'mongoose';

const completedChallengeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
  status: {
    type: String,
    enum: ['pending', 'completed', 'approved', 'rejected'], 
    default: 'completed',
  },
  solutionVideo: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.models.CompletedChallenge || mongoose.model('CompletedChallenge', completedChallengeSchema);