
import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import { StyledCard } from "@/components/ui/styled-card";
import { StyledButton } from "@/components/ui/styled-button";
import { InputLabelButton } from "@/components/ui/input-label-button";
import { BridgeHeader } from "./BridgeHeader";

export const BridgeCard: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const maxAmount = 1000;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleMaxClick = () => {
    setAmount(maxAmount.toString());
  };

  const handleHalfClick = () => {
    setAmount((maxAmount / 2).toString());
  };

  return (
    <StyledCard>
      <BridgeHeader 
        title="2- Bridge"
        description="Bridge your Interim ERC-20 ZIL to Zilliqa Network"
      />
      
      <div className="w-full h-[2px] bg-[rgba(194,194,194,0.1)]" />
      
      <div className="flex flex-row items-start justify-between w-full h-[16px] px-[10px]">
        <div className="flex flex-row items-center gap-[5px]">
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
            From
          </span>
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
            0xD81...C5af2
          </span>
        </div>
        <div className="flex flex-row items-center gap-[5px]">
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
            To
          </span>
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
            zil1...4a9p
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[#1E1D1D] shadow-sm rounded-[15px]">
        <div className="flex flex-row items-center gap-[15px]">
          <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-[#2C9297]" />
          <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
            ERC-20 ZIL
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[6px] w-[14px] h-[54px]">
          <ChevronRight className="w-[14px] h-[12px] text-white" />
        </div>
        <div className="flex flex-row items-center gap-[15px]">
          <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
            Interim ZIL
          </span>
          <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-black" />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center p-[15px] w-full h-[97.49px] bg-gradient-to-r from-[rgba(78,78,78,0.3)] via-[rgba(32,40,50,0.25)] to-[rgba(78,78,78,0.3)] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <div className="flex-1 mr-4">
            <input 
              type="text"
              value={amount}
              onChange={handleInputChange}
              className="bg-transparent font-['Montserrat'] font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-white w-full focus:outline-none"
              placeholder="0.0"
            />
          </div>
          <div className="flex flex-col gap-[11px] h-full justify-center">
            <InputLabelButton 
              onClick={handleMaxClick}
              variant="max"
            >
              Max
            </InputLabelButton>
            <InputLabelButton 
              onClick={handleHalfClick}
              variant="half"
            >
              Half
            </InputLabelButton>
          </div>
        </div>
      </div>

      <StyledButton variant="primary">
        Bridge
      </StyledButton>
    </StyledCard>
  );
};
