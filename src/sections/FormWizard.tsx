
import React from 'react';
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

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MultiStepForm
        initialValues={initialValues}
        steps={steps}
        onBack={onBack}
        onSubmit={onSubmit}
      />
    </motion.div>
  );
};

export default FormWizard;
