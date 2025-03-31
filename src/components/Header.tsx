
import React, { ReactNode } from 'react';
import Logo from './Logo';
import { ArrowLeft, X, HelpCircle, User, ShoppingCart, PanelLeft, PanelRightClose } from 'lucide-react';
import { motion } from 'framer-motion';
import { Toggle } from './ui/toggle';

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
  onBack?: () => void;
  onClose?: () => void;
  showSidebar?: boolean;
  toggleSidebar?: () => void;
  children?: ReactNode;
};

const Header = ({ 
  showBackButton = false, 
  title, 
  onBack, 
  onClose, 
  showSidebar,
  toggleSidebar,
  children 
}: HeaderProps) => {
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
        {toggleSidebar && (
          <Toggle 
            onClick={toggleSidebar} 
            className="p-1"
            aria-label="Toggle sidebar"
          >
            {showSidebar ? <PanelRightClose size={20} /> : <PanelLeft size={20} />}
          </Toggle>
        )}
        {children}
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
