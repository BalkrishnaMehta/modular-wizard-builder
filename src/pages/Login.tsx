
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/AuthLayout';
import SocialButton from '@/components/SocialButton';
import Divider from '@/components/Divider';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to email verification page for now
    navigate('/verify-email');
  };

  const handleSocialLogin = (provider: 'google' | 'apple') => {
    console.log(`Login with ${provider}`);
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Logg inn eller registrer deg</h1>
        <p className="text-gray-600 mb-6">På et sting!</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-postadresse
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              required
            />
          </div>

          <Divider />

          <SocialButton provider="google" onClick={() => handleSocialLogin('google')} />
          <SocialButton provider="apple" onClick={() => handleSocialLogin('apple')} />

          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-4">
              Når du oppretter en konto, godtar du våre{' '}
              <Link to="/personvern" className="text-app-blue">personvernregler</Link> og{' '}
              <Link to="/retningslinjer" className="text-app-blue">retningslinjer for informasjonskapsler</Link>.
            </p>

            <Button type="submit" className="w-full h-12 bg-app-blue hover:bg-blue-600">
              Logg inn
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
