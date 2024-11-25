import React from 'react';
import ChallengeDetails from '../../../components/ChallengeDetails';

export default function ChallengePage({ params }) {
  return <ChallengeDetails id={params.id} />;
}