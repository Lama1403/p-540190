
import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col items-start gap-[15px] w-full max-w-[1410px] h-[69px]">
      <h1 className="flex items-center justify-center w-full h-[40px] font-['Montserrat'] font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-[#E1E2E2]">
        {title}
      </h1>
      <p className="flex items-center justify-center w-full h-[14px] font-['Montserrat'] font-normal text-[12px] leading-[120%] tracking-[0.01em] text-[#E1E2E2]">
        {description}
      </p>
    </header>
  );
};
