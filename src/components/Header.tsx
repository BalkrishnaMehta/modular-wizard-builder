
import React from 'react';
import Logo from './Logo';
import { ArrowLeft, X, HelpCircle, User, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
  onBack?: () => void;
  onClose?: () => void;
};

const Header = ({ showBackButton = false, title, onBack, onClose }: HeaderProps) => {
  return (
    <motion.header 
      className="flex items-center justify-between p-4 bg-white border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        {showBackButton && (
          <button onClick={onBack} className="p-1">
            <ArrowLeft size={24} />
          </button>
        )}
        {title ? (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white">
              T
            </div>
            <span className="font-medium">{title}</span>
          </div>
        ) : (
          <Logo />
        )}
      </div>
      <div className="flex items-center gap-4">
        <button className="p-1">
          <HelpCircle size={24} />
        </button>
        <button className="p-1">
          <User size={24} />
        </button>
        <button className="p-1">
          <ShoppingCart size={24} />
        </button>
        <button onClick={onClose} className="p-1">
          <X size={24} />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
