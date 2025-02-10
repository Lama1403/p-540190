
import React from 'react';
import { ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoContainer } from '@/components/shared/InfoContainer';

export const TokenInfo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-full transition-all duration-300 rounded-[15px] group">
          <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(85,85,85,0.15),0_0_15px_rgba(51,51,51,0.1),0_0_45px_rgba(34,34,34,0.15)]">
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#333333] to-[#555555] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
            <div className="relative">
              <InfoContainer
                leftIcon={<></>}
                mainText="ERC-20 ZIL"
                centerIcon={<ChevronRight className="w-[14px] h-[12px] text-white" />}
                rightIcon={<></>}
                mainRightText="Interim ZIL"
              />
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
        <p className="text-sm">Token types being bridged between networks</p>
      </TooltipContent>
    </Tooltip>
  );
};
