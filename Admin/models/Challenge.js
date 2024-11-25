import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  points: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'approved', 'rejected'], default: 'pending' },
  instructions: { type: String, required: true },
  impactType: { type: String, enum: ['Plastic_Recycled', 'Plastic_Saved', 'Plastic_Repurposed'], required: true },
  totalImpact: { type: Number, default: 0, required: true },
  isApproved: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Challenge || mongoose.model('Challenge', challengeSchema);