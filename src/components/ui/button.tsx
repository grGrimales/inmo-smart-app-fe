import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ size = 'md', className, children, disabled, ...props }) => {
  const sizeClass = size === 'sm' ? 'h-8 px-3 py-1.5 text-sm' : size === 'lg' ? 'h-12 px-5 py-2.5 text-lg' : 'h-10 px-4 py-2 text-md';
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 bg-black text-white hover:bg-gray-900  h-10 px-4 py-2";
  return (
    <button className={`${baseClasses} ${sizeClass} ${className}`}  disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export  {Button};
