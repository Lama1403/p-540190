
import React from 'react';

interface CardHeaderProps {
  title: string;
  description: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col items-center gap-[15px] w-full">
      <div className="flex flex-row items-center justify-center md:justify-start w-[80%] md:w-full">
        <h1 className="font-montserrat font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-custom-text w-full text-center md:text-left">
          {title}
        </h1>
      </div>
      <p className="font-montserrat font-normal text-[12px] leading-[120%] tracking-[0.01em] text-custom-text w-[80%] md:w-full text-center md:text-left">
        {description}
      </p>
    </header>
  );
};
