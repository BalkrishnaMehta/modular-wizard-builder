
import React from 'react';
import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';
import { ServiceType } from '@/types';

type ServiceSelectionFormProps = {
  onSubmit: (service: ServiceType) => void;
};

const ServiceSelectionForm = ({ onSubmit }: ServiceSelectionFormProps) => {
  const [selectedService, setSelectedService] = React.useState<ServiceType | null>(null);

  return (
    <Formik
      initialValues={{ service: '' as ServiceType }}
      onSubmit={(values) => {
        if (selectedService) {
          onSubmit(selectedService);
        }
      }}
    >
      {({ setFieldValue }) => (
        <Form className="flex flex-col gap-6 max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold mb-4">Hvilken tjeneste trenger du?</h1>
            <p className="text-gray-600">
              Velg ett alternativ. Hvis du trenger noe annet, kan du legge det til på et senere tidspunkt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 mt-4"
          >
            <button
              type="button"
              className={`option-button ${selectedService === 'Reparasjon' ? 'selected' : ''}`}
              onClick={() => {
                setSelectedService('Reparasjon');
                setFieldValue('service', 'Reparasjon');
              }}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13V19M12 5V10M19 12H16M8 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span>Reparasjon</span>
            </button>

            <button
              type="button"
              className={`option-button ${selectedService === 'Tilpasning' ? 'selected' : ''}`}
              onClick={() => {
                setSelectedService('Tilpasning');
                setFieldValue('service', 'Tilpasning');
              }}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span>Tilpasning</span>
            </button>
          </motion.div>

          {selectedService === 'Reparasjon' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="text-gray-700"
            >
              <p className="mb-4">
                <strong>Reparasjon</strong> er å fikse skader, som å lappe en revne eller bytte ut en ødelagt glidelås, for å gjøre plagget ditt så godt som nytt.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: selectedService ? 1 : 0, y: selectedService ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              type="submit" 
              className="continue-button"
              disabled={!selectedService}
            >
              Fortsett
            </button>
          </motion.div>
        </Form>
      )}
    </Formik>
  );
};

export default ServiceSelectionForm;
