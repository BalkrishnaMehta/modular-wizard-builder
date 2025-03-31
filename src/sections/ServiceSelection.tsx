
import React from 'react';
import Header from '@/components/Header';
import ServiceSelectionForm from '@/forms/ServiceSelectionForm';
import { ServiceType } from '@/types';

type ServiceSelectionProps = {
  onServiceSelect: (service: ServiceType) => void;
};

const ServiceSelection = ({ onServiceSelect }: ServiceSelectionProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
      <Header />
      <div className="p-6">
        <ServiceSelectionForm onSubmit={onServiceSelect} />
      </div>
    </div>
  );
};

export default ServiceSelection;
