
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="box-border flex flex-row justify-between items-center px-10 py-3.5 w-full border-b border-[#333333] h-[72.4px]">
      {/* Icon Group */}
      <div className="flex items-center h-[44.4px] w-[129.84px]">
        {/* Logo/Layer_1 */}
        <div className="relative w-[26px] h-[36px]">
          <div className="absolute left-0 right-[20.88%] top-[6.05%] bottom-0 bg-white" />
          <div className="absolute left-0 right-0 top-0 bottom-[67.27%] bg-[#D8D8D8]" />
          <div className="absolute left-[79.12%] right-0 top-[26.73%] bottom-[52.21%] bg-[#AFAFAF]" />
          <div className="absolute left-[79.12%] right-0 top-[48.7%] bottom-0 bg-[#AFAFAF]" />
        </div>
        
        {/* Staking Label */}
        <span className="font-montserrat font-semibold text-[10.3px] leading-[82px] flex items-center tracking-[0.02em] text-[#00D0C6] ml-2">
          Staking
        </span>
      </div>

      {/* Navbar Container */}
      <div className="flex flex-row items-center gap-2.5 w-[240.57px] h-[34.73px]">
        {/* Logo Container */}
        <div className="flex justify-center items-center w-[38px] h-[34.73px] bg-[#1E1D1D] rounded-lg p-[7px]">
          <div className="w-[15.33px] h-[20.73px]">
            <div className="w-[15.25px] h-[21.49px] bg-[#05707E]" />
          </div>
        </div>

        {/* Wallet Container */}
        <div className="flex flex-row items-center px-[9px] py-1 gap-[7px] w-[192.57px] h-[34.73px] bg-[#1E1D1D] rounded-lg">
          {/* Balance */}
          <div className="w-[65.6px] h-[12px]">
            <span className="font-montserrat font-semibold text-[15px] leading-[46px] text-white">
              Balance
            </span>
          </div>

          {/* Address Container */}
          <div className="flex flex-row items-center px-[5px] py-[3px] gap-[5px] w-[101.97px] h-[24.95px] bg-[#333333] rounded-[5px]">
            <span className="font-montserrat font-semibold text-[11px] leading-[120%] flex items-center text-center underline text-white">
              0x...1234
            </span>
            <div className="w-[18.97px] h-[18.95px] rounded-full bg-[#97CFE5]" />
          </div>
        </div>
      </div>
    </nav>
  );
};
