'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

function ProgressBar() {
  return (
    <Next13ProgressBar height="4px" color="#3ab4ff" options={{ showSpinner: true }} showOnShallow />
  );
};

export default ProgressBar;