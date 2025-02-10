
import React from 'react';

interface BridgeHeaderProps {
  title: string;
  description: string;
}

export const BridgeHeader: React.FC<BridgeHeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col items-center gap-[15px] w-full">
      <div className="flex flex-row items-center w-full">
        <h1 className="font-['Montserrat'] font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-[#E1E2E2] flex items-center w-full text-left md:text-left text-center">
          {title}
        </h1>
      </div>
      <p className="font-['Montserrat'] font-normal text-[12px] leading-[120%] tracking-[0.01em] text-[#E1E2E2] flex items-center w-full text-left md:text-left text-center">
        {description}
      </p>
    </header>
  );
};

