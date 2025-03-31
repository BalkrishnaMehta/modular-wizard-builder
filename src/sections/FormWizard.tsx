
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MultiStepForm from '@/forms/MultiStepForm';
import { FormValues, repairSteps, tailoringSteps } from '@/types';

type FormWizardProps = {
  initialValues: FormValues;
  onBack: () => void;
  onSubmit: (values: FormValues) => void;
};

const FormWizard = ({ initialValues, onBack, onSubmit }: FormWizardProps) => {
  const steps = initialValues.service === 'Reparasjon' ? repairSteps : tailoringSteps;
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-xl">
        <MultiStepForm
          initialValues={initialValues}
          steps={steps}
          onBack={onBack}
          onSubmit={onSubmit}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </motion.div>
  );
};

export default FormWizard;
