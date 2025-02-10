
import React from 'react';

interface NetworkSelectorProps {
  network: string;
}

export const NetworkSelector: React.FC<NetworkSelectorProps> = ({ network }) => {
  return (
    <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[#1E1D1D]/40 backdrop-blur-lg shadow-2xl rounded-[15px]">
      <div className="flex flex-row items-center gap-[15px]">
        <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-black" />
        <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
          {network}
        </span>
      </div>
      <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
        Network
      </span>
    </div>
  );
};

