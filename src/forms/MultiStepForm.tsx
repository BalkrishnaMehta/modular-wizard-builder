
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { FormStep, FormValues, GarmentType, RepairMethod } from '@/types';
import { ChevronRight, PanelLeft, PanelRightClose } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

type MultiStepFormProps = {
  initialValues: FormValues;
  steps: FormStep[];
  onBack: () => void;
  onSubmit: (values: FormValues) => void;
  showSidebar?: boolean;
  toggleSidebar?: () => void;
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

const MultiStepForm = ({ 
  initialValues, 
  steps, 
  onBack, 
  onSubmit,
  showSidebar = true,
  toggleSidebar
}: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const step = steps[currentStep];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStepContent = (step: FormStep, formikProps: any) => {
    const { values, setFieldValue, handleSubmit } = formikProps;

    switch (step.id) {
      case 'garment':
        return (
          <div className="flex flex-col gap-4 mt-4">
            <div className="grid grid-cols-1 gap-3">
              {garmentOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`flex items-center p-3 rounded-lg ${
                    values.garment === option.value 
                      ? 'bg-blue-100 border-2 border-blue-500' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setFieldValue('garment', option.value);
                  }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300">
                    <span className="text-xl">{option.icon}</span>
                  </div>
                  <span className="ml-3 font-medium">{option.value}</span>
                </button>
              ))}
            </div>
            
            {values.garment && (
              <button 
                type="button" 
                onClick={handleNextStep} 
                className="mt-6 w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Fortsett
              </button>
            )}
          </div>
        );
        
      case 'repairMethod':
        return (
          <div className="flex flex-col gap-4 mt-4">
            <div className="grid grid-cols-1 gap-3">
              {repairMethods.map((method) => (
                <button
                  key={method.value}
                  type="button"
                  className={`flex items-center p-3 rounded-lg ${
                    values.repairMethod === method.value 
                      ? 'bg-blue-100 border-2 border-blue-500' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setFieldValue('repairMethod', method.value);
                  }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300">
                    <span className="text-xl">{method.icon}</span>
                  </div>
                  <span className="ml-3 font-medium">{method.value}</span>
                </button>
              ))}
            </div>
            
            {values.repairMethod && (
              <button 
                type="button" 
                onClick={handleNextStep} 
                className="mt-6 w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
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
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="For eksempel: et hull på høyre kne fra da jeg falt, ganske bredt."
                value={values.description || ''}
                onChange={(e) => setFieldValue('description', e.target.value)}
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              Fortsett
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Header 
        showBackButton={true}
        title={initialValues.service}
        onBack={onBack}
      >
        <Toggle 
          onClick={toggleSidebar} 
          className="ml-auto mr-2"
          aria-label="Toggle sidebar"
        >
          {showSidebar ? <PanelRightClose size={18} /> : <PanelLeft size={18} />}
        </Toggle>
      </Header>
      
      <div className="border-t border-gray-200">
        <ProgressBar currentStep={currentStep + 1} totalSteps={steps.length} />
      </div>

      <div className="flex min-h-[600px]">
        {/* Sidebar with steps */}
        {showSidebar && (
          <div className="w-64 border-r border-gray-200 p-2 bg-gray-50">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center py-3 px-4 rounded-lg mb-2 ${
                  index === currentStep 
                    ? 'bg-white font-medium text-blue-600 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                {index < currentStep ? (
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                    ✓
                  </div>
                ) : (
                  <div className={`w-6 h-6 rounded-full ${
                    index === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300'
                  } flex items-center justify-center mr-2`}>
                    {index + 1}
                  </div>
                )}
                <span>{step.title}</span>
                {index === currentStep && <ChevronRight size={16} className="ml-auto text-blue-500" />}
              </div>
            ))}
          </div>
        )}

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
