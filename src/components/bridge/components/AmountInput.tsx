
import React from 'react';
import { InputLabelButton } from "@/components/ui/input-label-button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface AmountInputProps {
  amount: string;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxClick: () => void;
  onHalfClick: () => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  onAmountChange,
  onMaxClick,
  onHalfClick
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-full transition-all duration-300 rounded-[15px] group">
          <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(85,85,85,0.15),0_0_15px_rgba(51,51,51,0.1),0_0_45px_rgba(34,34,34,0.15)]">
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#333333] to-[#555555] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
            <div className="relative bg-[#1E1D1D]/80 rounded-[15px]">
              <div className="flex flex-row justify-between items-center p-[15px] w-full h-[97.49px] rounded-[15px]">
                <div className="flex flex-row justify-between items-center w-full h-full">
                  <div className="flex-1 mr-4">
                    <input 
                      type="text"
                      value={amount}
                      onChange={onAmountChange}
                      className="bg-transparent font-montserrat font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-white w-full focus:outline-none"
                      placeholder="0.0"
                    />
                  </div>
                  <div className="flex flex-col gap-[11px] h-full justify-center">
                    <InputLabelButton 
                      onClick={onMaxClick}
                      variant="max"
                    >
                      Max
                    </InputLabelButton>
                    <InputLabelButton 
                      onClick={onHalfClick}
                      variant="half"
                    >
                      Half
                    </InputLabelButton>
                  </div>
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
        <p className="text-sm">Enter the amount of tokens you want to bridge</p>
      </TooltipContent>
    </Tooltip>
  );
};
