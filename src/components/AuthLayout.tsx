
import React, { ReactNode } from 'react';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

const AuthLayout = ({ children, showBackButton = false }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Content - Form */}
      <div className="flex-1 flex flex-col p-6 md:p-12 md:max-w-[500px]">
        <div className="mb-8">
          {showBackButton && (
            <Link to="/login" className="inline-block mb-4">
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </Link>
          )}
          <Logo />
        </div>
        <div className="flex-grow">{children}</div>
      </div>

      {/* Right Content - Blue Background (hidden on mobile) */}
      <div className="hidden md:block md:flex-1 bg-app-light-blue rounded-3xl m-4"></div>
    </div>
  );
};

export default AuthLayout;
