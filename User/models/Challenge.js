
// import mongoose from 'mongoose';

// const challengeSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   startDate: {
//     type: Date,
//     required: true,
//   },
//   endDate: {
//     type: Date,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true, // URL or path to the challenge image
//   },

//   points: { type: Number, required: true }, // Number of points rewarded for this challenge
//   status: { 
//     type: String, 
//     enum: ['pending', 'completed', 'approved', 'rejected'], // Possible statuses
//     default: 'pending',
//   },
//   criteria: { 
//     type: [String], 
//     required: true, // Challenge-specific criteria
//   },
//   instructions: {
//     type: String,
//     required: true, // Instructions for completing the challenge
//   },
//   impactType: {
//     type: String,
//     enum: ['Plastic_Recycled', 'Plastic_Saved', 'Plastic_Repurposed'], // Environmental impact types
//     required: true,
//   },

//   // Total environmental impact in terms of units such as kg of plastic recycled
//   totalImpact: {
//     type: Number,
//     default: 0,
//     required: true,
//   },
//   isApproved: { 
//     type: Boolean, 
//     default: false 
//   },
//   solutionVideo: { 
//     type: String, // URL of the solution video uploaded by the participant
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Export the Challenge model
// export default mongoose.models.Challenge || mongoose.model('Challenge', challengeSchema);


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


