
import React from 'react';
import Header from '@/components/Header';
import ServiceSelectionForm from '@/forms/ServiceSelectionForm';
import { ServiceType } from '@/types';

type ServiceSelectionProps = {
  onServiceSelect: (service: ServiceType) => void;
  onClose: () => void;
};

const ServiceSelection = ({ onServiceSelect, onClose }: ServiceSelectionProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl">
      <Header onClose={onClose} />
      <div className="flex-1 flex flex-col justify-center p-6">
        <ServiceSelectionForm onSubmit={onServiceSelect} />
      </div>
    </div>
  );
};

export default ServiceSelection;
