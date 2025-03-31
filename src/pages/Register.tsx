
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import AuthLayout from '@/components/AuthLayout';
import PasswordInput from '@/components/PasswordInput';

const Register = () => {
  const [formData, setFormData] = useState({
    email: 'test@test.test',
    password: '',
    phone: '',
    firstName: '',
    lastName: '',
    newsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <AuthLayout showBackButton>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Registrer deg</h1>
        <p className="text-gray-600 mb-6">På et sting!</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-postadresse
              </label>
              <button type="button" className="text-sm text-app-blue">
                Endre
              </button>
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="h-12"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Passord
            </label>
            <PasswordInput
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            />
            <p className="text-xs text-gray-500 mt-1">
              Passordet må ha minst 8 tegn og inneholde minst ett tall og ett spesialtegn.
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefonnummer
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="h-12"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Fornavn
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="h-12"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Etternavn
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="h-12"
            />
          </div>

          <div className="flex items-start mb-6">
            <Checkbox 
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={handleCheckboxChange}
              className="mt-0.5"
            />
            <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
              Bli med i nyhetsbrevet vårt.
            </label>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-4">
              Når du oppretter en konto, godtar du våre{' '}
              <Link to="/personvern" className="text-app-blue">personvernregler</Link> og{' '}
              <Link to="/retningslinjer" className="text-app-blue">retningslinjer for informasjonskapsler</Link>.
            </p>

            <Button type="submit" className="w-full h-12 bg-app-blue hover:bg-blue-600">
              Registrer deg
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
