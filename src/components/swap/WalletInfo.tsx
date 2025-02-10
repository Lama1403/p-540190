
import React from 'react';

interface WalletInfoProps {
  address?: string;
  balance?: string;
  unit?: string;
}

export const WalletInfo: React.FC<WalletInfoProps> = ({ 
  address = "0x1234...5678",
  balance = "1.234",
  unit = "ETH"
}) => {
  return (
    <div className="flex flex-row items-center gap-2.5 w-[240.57px] h-[34.73px]">
      {/* Logo Container */}
      <div className="flex flex-row justify-center items-center p-[7px] w-[38px] h-[34.73px] bg-[#1E1D1D] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-[15.33px] h-[20.73px]">
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.25 21.49L0 0V21.49H15.25Z" fill="#05707E"/>
          </svg>
        </div>
      </div>

      {/* Wallet Container */}
      <div className="flex flex-row items-center px-[9px] py-1 gap-[7px] w-[192.57px] h-[34.73px] bg-[#1E1D1D] rounded-lg shadow-sm hover:bg-[#252525] transition-colors duration-200">
        {/* Balance */}
        <div className="flex flex-col items-start">
          <span className="font-['Montserrat'] font-semibold text-[15px] leading-[18px] text-white">
            {balance}
          </span>
          <span className="font-['Montserrat'] font-semibold text-[15px] leading-[18px] text-gray-300">
            {unit}
          </span>
        </div>

        {/* Address Container */}
        <div className="flex flex-row items-center px-[5px] py-[3px] gap-[5px] w-[101.97px] h-[24.95px] bg-[#333333] rounded-[5px] hover:bg-[#3d3d3d] transition-colors duration-200">
          {/* Address */}
          <span className="font-['Montserrat'] font-semibold text-[11px] leading-[120%] flex items-center text-center text-gray-300 hover:text-white transition-colors duration-200">
            {address}
          </span>
          
          {/* Circle */}
          <div className="w-[18.97px] h-[18.95px] rounded-full bg-[#97CFE5] shadow-inner" />
        </div>
      </div>
    </div>
  );
};
