
import React from 'react';
import { ChevronRight } from "lucide-react";

interface TokenSelectorProps {
  fromToken: string;
  toToken: string;
}

export const TokenSelector: React.FC<TokenSelectorProps> = ({ fromToken, toToken }) => {
  return (
    <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[#1E1D1D] shadow-sm rounded-[15px]">
      <div className="flex flex-row items-center gap-[15px]">
        <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-[#2C9297]" />
        <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
          {fromToken}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-[6px] w-[14px] h-[54px]">
        <ChevronRight className="w-[14px] h-[12px] text-white" />
      </div>
      <div className="flex flex-row items-center gap-[15px]">
        <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
          {toToken}
        </span>
        <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-black" />
      </div>
    </div>
  );
};
