
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/AuthLayout';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verification code submitted:', verificationCode);
    // Handle verification logic here
  };

  const handleResendCode = () => {
    console.log('Resend code');
    // Handle code resend logic here
  };

  return (
    <AuthLayout showBackButton>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Bekreft din e-postadresse</h1>
        <p className="text-gray-600 mb-8">
          Oppgi den 6-siffrede koden vi sendte til e-postadressen du registrerte.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={verificationCode} onChange={setVerificationCode}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600">
              Har du ikke fått kode? <button type="button" onClick={handleResendCode} className="text-app-blue">Send på nytt</button>
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-app-blue hover:bg-blue-600"
            disabled={verificationCode.length !== 6}
          >
            Bekreft
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
