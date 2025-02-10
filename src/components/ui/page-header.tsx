
import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, className = '' }) => {
  return (
    <header className={`flex flex-col items-center gap-[15px] w-full max-w-[1410px] h-[69px] ${className}`}>
      <h1 className="flex items-center justify-center w-full h-[40px] font-montserrat font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-custom-text text-center">
        {title}
      </h1>
      <p className="flex items-center justify-center w-full max-w-[70vw] mx-auto h-[14px] font-montserrat font-normal text-[12px] leading-[120%] tracking-[0.01em] text-custom-text text-center">
        {description}
      </p>
    </header>
  );
};
