
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
        {/* ZIL Amount */}
        <div className="flex items-center justify-center px-4 py-2 bg-[#1A1A1A] rounded-lg">
          <span className="text-white font-medium">2039 ZIL</span>
        </div>
        
        {/* Address */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] rounded-lg">
          <span className="text-white/80 text-sm">0x1a2b...910j</span>
          <div className="w-6 h-6 rounded-full bg-[#97CFE5]" />
        </div>
      </div>
    </nav>
  );
};
