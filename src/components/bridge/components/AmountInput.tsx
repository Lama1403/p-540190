
import React, { useState } from 'react';
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
  const [activeButton, setActiveButton] = useState<'none' | 'max' | 'min'>('none');

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-full transition-all duration-300 rounded-[15px] group">
          <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(0,208,198,0.15),0_0_15px_rgba(0,208,198,0.1),0_0_45px_rgba(82,46,255,0.15)]">
            <div 
              className={`absolute inset-0 rounded-[15px] opacity-0 group-hover:opacity-100 animate-[gradient_10s_ease-in-out_infinite] group-hover:bg-[length:200%_200%] transition-all duration-700
                ${activeButton === 'max' ? 'bg-gradient-to-r from-[#00D0C6] to-[#00B8AF]' : 
                  activeButton === 'min' ? 'bg-gradient-to-r from-[#2B2970] to-[#522EFF]' : 
                  'bg-gradient-to-r from-[#00D0C6] to-[#522EFF]'}
                [&:has(input:focus)]:opacity-0`}
            />
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#8E9196] via-[#555555] to-[#333333] opacity-0 [&:has(input:focus)]:opacity-100 animate-[gradient_10s_ease-in-out_infinite] bg-[length:200%_200%]" />
            <div className="relative bg-[#1E1D1D]/80 rounded-[15px] group-hover:bg-gradient-to-r group-hover:from-[#333333]/50 group-hover:to-[#555555]/50">
              <div className="flex flex-row justify-between items-center p-[15px] w-full h-[97.49px] bg-gradient-to-r from-[rgba(78,78,78,0.3)] via-[rgba(32,40,50,0.25)] to-[rgba(78,78,78,0.3)] rounded-[15px]">
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
                      variant="half"
                      onMouseEnter={() => setActiveButton('max')}
                      onMouseLeave={() => setActiveButton('none')}
                    >
                      Max
                    </InputLabelButton>
                    <InputLabelButton 
                      onClick={onHalfClick}
                      variant="max"
                      onMouseEnter={() => setActiveButton('min')}
                      onMouseLeave={() => setActiveButton('none')}
                    >
                      Min
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
        className="bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl"
        sideOffset={5}
      >
        <p className="text-sm">Enter the amount of tokens you want to bridge</p>
      </TooltipContent>
    </Tooltip>
  );
};
