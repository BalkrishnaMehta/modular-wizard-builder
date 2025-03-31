
import React from 'react';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full h-1.5 bg-gray-200 overflow-hidden">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
