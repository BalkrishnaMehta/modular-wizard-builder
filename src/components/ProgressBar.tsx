
import React from 'react';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
