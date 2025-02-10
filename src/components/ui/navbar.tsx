
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
    </nav>
  );
};
