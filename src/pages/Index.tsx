
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ServiceSelection from '@/sections/ServiceSelection';
import FormWizard from '@/sections/FormWizard';
import { FormValues, ServiceType } from '@/types';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formState, setFormState] = useState<FormValues | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(false);
  };

  const handleBack = () => {
    setFormState(null);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setFormState(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-app-bg p-4 flex flex-col items-center justify-center">
      <button 
        onClick={openModal} 
        className="bg-app-blue text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-600 transition-colors"
      >
        Open Service Wizard
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <div className="relative w-full max-w-4xl z-10">
              {!formState ? (
                <ServiceSelection 
                  onServiceSelect={handleServiceSelect} 
                  onClose={handleClose} 
                />
              ) : (
                <FormWizard 
                  initialValues={formState}
                  onBack={handleBack}
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
