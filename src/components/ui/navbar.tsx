
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="box-border flex flex-row justify-between items-center px-10 h-[72.4px] w-full border-b border-[#333333]">
      {/* Left side - Logo and Upgrade text */}
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 bg-[#00D0C6]" />
        </div>
        <span className="text-[#00D0C6] text-sm font-medium">
          Upgrade
        </span>
      </div>

      {/* Right side - Wallet info */}
      <div className="flex items-center gap-2">
        {/* Balance Container */}
        <div className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#1E1D1D] rounded-lg">
          <span className="font-montserrat font-semibold text-[15px] leading-[46px] text-white">
            2039 ZIL
          </span>
        </div>
        
        {/* Wallet Address Container */}
        <div className="flex items-center h-[34.73px] px-[9px] gap-[7px] bg-[#1E1D1D] rounded-lg">
          <div className="flex items-center gap-[5px] px-[5px] py-[3px] bg-[#333333] rounded-[5px]">
            <span className="font-montserrat font-semibold text-[11px] leading-[120%] text-white/80 underline">
              0x1a2b...910j
            </span>
            <div className="w-[18.97px] h-[18.95px] rounded-full bg-[#97CFE5]" />
          </div>
        </div>
      </div>
    </nav>
  );
};
