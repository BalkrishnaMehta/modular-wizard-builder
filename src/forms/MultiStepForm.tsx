
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { FormStep, FormValues, GarmentType, RepairMethod } from '@/types';
import { ChevronRight } from 'lucide-react';

type MultiStepFormProps = {
  initialValues: FormValues;
  steps: FormStep[];
  onBack: () => void;
  onSubmit: (values: FormValues) => void;
};

const garmentOptions: { value: GarmentType; icon: string }[] = [
  { value: 'Bukse', icon: '👖' },
  { value: 'Genser', icon: '👕' },
  { value: 'Jakke', icon: '🧥' },
  { value: 'Kjole', icon: '👗' },
  { value: 'Skjorte', icon: '👔' },
  { value: 'Blazer', icon: '🧥' },
  { value: 'Skjørt', icon: '👗' },
  { value: 'Jeans', icon: '👖' },
  { value: 'Kåpe/Frakk', icon: '🧥' }
];

const repairMethods: { value: RepairMethod; icon: string }[] = [
  { value: 'Bytte glidelås', icon: '🔗' },
  { value: 'Stort hull', icon: '🕳️' },
  { value: 'Lite hull', icon: '🔍' },
  { value: 'Sy på ny knapp', icon: '⚪' },
  { value: 'Fest på beltehemper', icon: '🔄' },
];

const MultiStepForm = ({ initialValues, steps, onBack, onSubmit }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const step = steps[currentStep];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderStepContent = (step: FormStep, formikProps: any) => {
    const { values, setFieldValue, handleSubmit } = formikProps;

    switch (step.id) {
      case 'garment':
        return (
          <div className="flex flex-col gap-4 mt-4">
            {garmentOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`option-button ${values.garment === option.value ? 'selected' : ''}`}
                onClick={() => {
                  setFieldValue('garment', option.value);
                }}
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">{option.icon}</span>
                </div>
                <span>{option.value}</span>
              </button>
            ))}
            
            {values.garment && (
              <button type="button" onClick={handleNextStep} className="continue-button mt-4">
                Fortsett
              </button>
            )}
          </div>
        );
        
      case 'repairMethod':
        return (
          <div className="flex flex-col gap-4 mt-4">
            {repairMethods.map((method) => (
              <button
                key={method.value}
                type="button"
                className={`option-button ${values.repairMethod === method.value ? 'selected' : ''}`}
                onClick={() => {
                  setFieldValue('repairMethod', method.value);
                }}
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">{method.icon}</span>
                </div>
                <span>{method.value}</span>
              </button>
            ))}
            
            {values.repairMethod && (
              <button type="button" onClick={handleNextStep} className="continue-button mt-4">
                Fortsett
              </button>
            )}

            {values.repairMethod === 'Bytte glidelås' && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Er glidelåsen din gåen?</strong> Vi fjerner den gamle, velger en ny og syr den på plass.
                </p>
              </div>
            )}
          </div>
        );
        
      case 'description':
        return (
          <div className="flex flex-col gap-6 mt-4">
            <div>
              <p className="mb-2">Her kan du skrive mer om skaden og sin plassering.</p>
              <textarea
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-blue"
                placeholder="For eksempel: et hull på høyre kne fra da jeg falt, ganske bredt."
                value={values.description || ''}
                onChange={(e) => setFieldValue('description', e.target.value)}
              />
            </div>
            
            <button type="submit" className="continue-button">
              Fortsett
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header 
        showBackButton={true}
        title={initialValues.service}
        onBack={onBack}
      />
      
      <ProgressBar currentStep={currentStep + 1} totalSteps={steps.length} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 border-r border-gray-200 overflow-hidden"
            >
              <div className="py-2">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`sidebar-item ${index === currentStep ? 'active' : ''}`}
                  >
                    <span>{step.title}</span>
                    {index === currentStep && (
                      <ChevronRight size={18} className="ml-auto text-app-blue" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle sidebar button */}
        <motion.button
          className="absolute top-[90px] left-2 z-10 p-2 bg-white rounded-full shadow-md"
          onClick={toggleSidebar}
          animate={{ rotate: sidebarOpen ? 180 : 0 }}
        >
          <ChevronRight size={20} className={sidebarOpen ? "rotate-180" : ""} />
        </motion.button>

        {/* Main content */}
        <div className="flex-1 p-6">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {(formikProps) => (
              <Form>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-xl mx-auto"
                  >
                    <div className="mb-8">
                      <h1 className="text-2xl font-bold mb-2">{step.title}</h1>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    {renderStepContent(step, formikProps)}
                  </motion.div>
                </AnimatePresence>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
