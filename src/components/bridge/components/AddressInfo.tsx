
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const AddressInfo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-full transition-all duration-300 rounded-[15px]">
          <div className="flex flex-row items-start justify-between w-full h-[16px] px-[10px]">
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
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        align="center" 
        className="bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl"
        sideOffset={5}
      >
        <p className="text-sm">Source and destination addresses for the bridge transaction</p>
      </TooltipContent>
    </Tooltip>
  );
};
