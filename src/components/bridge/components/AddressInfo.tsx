
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const AddressInfo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-full transition-all duration-300 rounded-[15px] group">
          <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(85,85,85,0.15),0_0_15px_rgba(51,51,51,0.1),0_0_45px_rgba(34,34,34,0.15)]">
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#333333] to-[#555555] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
            <div className="relative bg-[#1E1D1D]/80 rounded-[15px]">
              <div className="flex flex-row items-start justify-between w-full h-[16px] px-[10px] py-[17px]">
                <div className="flex flex-row items-center gap-[5px]">
                  <span className="font-montserrat font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
                    From
                  </span>
                  <span className="font-montserrat font-normal text-[12px] leading-[16px] text-white">
                    0xD81...C5af2
                  </span>
                </div>
                <div className="flex flex-row items-center gap-[5px]">
                  <span className="font-montserrat font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
                    To
                  </span>
                  <span className="font-montserrat font-normal text-[12px] leading-[16px] text-white">
                    zil1...4a9p
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        align="center" 
        className="bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl"
        sideOffset={5}
      >
        <p className="text-sm">Source and destination addresses for the bridge transaction</p>
      </TooltipContent>
    </Tooltip>
  );
};
