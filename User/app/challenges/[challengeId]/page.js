

"use client"
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../services/firebase';
import Swal from 'sweetalert2';
import { Calendar, Award, TrendingUp, Upload, Info, CheckCircle, XCircle, Loader, Recycle, Trash2, Water, Wind } from 'lucide-react';
import Loading from '@/components/Loading';
const ChallengeDetails = () => {
  const { challengeId } = useParams();
  const router = useRouter();
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchChallengeDetails = async () => {
      try {
        const response = await fetch(`/api/challenges/${challengeId}`);
        if (!response.ok) throw new Error('Failed to fetch challenge details');
        const data = await response.json();
        setChallenge(data);
      } catch (error) {
        console.error('Error fetching challenge details:', error);
        setError('Error fetching challenge details');
      } finally {
        setLoading(false);
      }
    };

    if (challengeId) fetchChallengeDetails();
  }, [challengeId]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await fetch('/api/auth/check', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        const data = await res.json();
        setIsLoggedIn(data.isLoggedIn);
        setUserId(data.userId);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      }
    };
    checkAuthStatus();
  }, []);

  const handleVideoUpload = async () => {
    if (!videoFile) return;

    const videoRef = ref(storage, `challenges/${challengeId}/solutions/${videoFile.name}`);
    setUploading(true);
    setShowUploadModal(true);

    const uploadTask = uploadBytesResumable(videoRef, videoFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Error uploading video:', error);
        setUploading(false);
        setShowUploadModal(false);
        Swal.fire({
          title: 'Upload Failed',
          text: 'Failed to upload video. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      },
      async () => {
        const videoURL = await getDownloadURL(uploadTask.snapshot.ref);
        const requestData = { userId, challengeId, solutionVideo: videoURL };

        const response = await fetch('/api/challenges/completed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) throw new Error('Failed to save completed challenge');

        Swal.fire({
          title: 'Submission Successful!',
          text: 'We will review your submission.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setUploading(false);
        setShowUploadModal(false);
        router.push('/challenges');
      }
    );
  };

  if (loading) {
    return (
      <Loading/>
    );
  }


  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-red-600 font-semibold flex items-center"
        >
          <XCircle className="w-8 h-8 mr-2" />
          {error}
        </motion.div>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-yellow-600 font-semibold flex items-center"
        >
          <Info className="w-8 h-8 mr-2" />
          No challenge details found.
        </motion.div>
      </div>
    );
  }

  return (
    <div className=" p-20 bg-gray-100 min-h-screen">
      <AnimatePresence>
        {showUploadModal && (
          <UploadProgressModal progress={uploadProgress} />
        )}
      </AnimatePresence>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center text-blue mt-12"
      >
        {challenge.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 mb-8 text-center"
      >
        {challenge.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <DetailCard icon={Info} label="Instructions" value={challenge.instructions} />
        <DetailCard icon={Award} label="Points" value={challenge.points} />
        <DetailCard icon={TrendingUp}   label="Total Impact for Reducing Plastic"  value={challenge.totalImpact} />
        <DetailCard icon={Recycle} label="Impact Type" value={challenge.impactType} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-center text-green flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 mr-2" />
            Submit Your Solution
          </h2>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="mb-6 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
          />
          <div className="flex justify-center">
            <button
              onClick={handleVideoUpload}
              disabled={!videoFile || uploading}
              className="bg-blue hover:bg-blueD text-white font-bold py-2 px-4 rounded transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : 'Upload Solution'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const UploadProgressModal = ({ progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full"
      >
        <h3 className="text-lg font-semibold text-green mb-4 flex items-center justify-center">
          <Upload className="w-5 h-5 mr-2" />
          Uploading Video
        </h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
          <div className="bg-green h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mt-4 text-gray-700 text-center">{Math.round(progress)}% complete</p>
      </motion.div>
    </motion.div>
  );
};

const DetailCard = ({ icon: Icon, label, value,iconColor = 'text-blueD' }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md p-6 overflow-hidden transition-all duration-300 hover:shadow-lg"
  >
    <div className="flex items-center">
    <Icon className={`w-6 h-6 mr-4 ${iconColor}`} />
    <div>
        <p className="text-sm font-semibold text-gray-600">{label}</p>
        <p className="text-lg text-gray-800">{value}</p>
      </div>
    </div>
  </motion.div>
);

export default ChallengeDetails;