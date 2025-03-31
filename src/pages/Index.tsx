
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ServiceSelection from '@/sections/ServiceSelection';
import FormWizard from '@/sections/FormWizard';
import { FormValues, ServiceType } from '@/types';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formState, setFormState] = useState<FormValues | null>(null);
  const { toast } = useToast();

  const handleServiceSelect = (service: ServiceType) => {
    setFormState({ service });
  };

  const handleFormSubmit = (values: FormValues) => {
    toast({
      title: "Form submitted successfully!",
      description: "Your data has been saved.",
    });
    console.log('Form submitted:', values);
    setFormState(null);
  };

  const handleBack = () => {
    setFormState(null);
  };

  return (
    <div className="min-h-screen bg-[#D6E5F3] p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={formState ? 'form' : 'selection'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {!formState ? (
              <ServiceSelection 
                onServiceSelect={handleServiceSelect} 
              />
            ) : (
              <FormWizard 
                initialValues={formState}
                onBack={handleBack}
                onSubmit={handleFormSubmit}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
