
import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import { StyledCard } from "@/components/ui/styled-card";
import { StyledButton } from "@/components/ui/styled-button";
import { InputLabelButton } from "@/components/ui/input-label-button";
import { BridgeHeader } from "./BridgeHeader";
import { useToast } from "@/hooks/use-toast";

export const BridgeCard: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const maxAmount = 1000;
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleMaxClick = () => {
    setAmount(maxAmount.toString());
    toast({
      title: "💎 Maximum Amount Set",
      description: `Set to maximum available: ${maxAmount} ZIL`,
      variant: "default",
      className: "bg-[#FEF7CD] border-[#9b87f5] text-[#1A1F2C] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm animate-scale-in",
      duration: 2000,
    });
  };

  const handleHalfClick = () => {
    setAmount((maxAmount / 2).toString());
    toast({
      title: "🎯 Half Amount Set",
      description: `Set to half of maximum: ${maxAmount / 2} ZIL`,
      variant: "default",
      className: "bg-[#FDE1D3] border-[#9b87f5] text-[#1A1F2C] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm animate-scale-in",
      duration: 2000,
    });
  };

  const handleBridge = () => {
    if (!amount) {
      toast({
        title: "⚠️ Error",
        description: "Please enter an amount to bridge",
        variant: "destructive",
        className: "bg-[#FFDEE2] border-[#ea384c] text-[#ea384c] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm animate-fade-in",
        duration: 3000,
      });
      return;
    }
    
    // Success toast
    toast({
      title: "🌉 Bridge Initiated",
      description: `Bridging ${amount} ZIL to Zilliqa Network...`,
      variant: "default",
      className: "bg-[#F2FCE2] border-[#9b87f5] text-[#1A1F2C] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm animate-fade-in",
      duration: 3000,
    });

    // Show progress toast after delay
    setTimeout(() => {
      toast({
        title: "⏳ Processing Bridge",
        description: "Please wait while we process your transaction...",
        variant: "default",
        className: "bg-[#D3E4FD] border-[#9b87f5] text-[#1A1F2C] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm animate-fade-in",
        duration: 2500,
      });
    }, 2000);
  };

  return (
    <StyledCard className="bg-gradient-to-br from-[rgba(30,29,29,0.6)] to-[rgba(30,29,29,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.1)]">
      <BridgeHeader 
        title="2- Bridge"
        description="Bridge your Interim ERC-20 ZIL to Zilliqa Network"
      />
      
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[rgba(194,194,194,0.2)] to-transparent" />
      
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

      <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[rgba(30,29,29,0.7)] shadow-lg backdrop-blur-sm rounded-xl border border-[rgba(255,255,255,0.05)]">
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

      <div className="flex flex-row justify-between items-center p-[15px] w-full h-[97.49px] bg-gradient-to-r from-[rgba(78,78,78,0.3)] via-[rgba(32,40,50,0.25)] to-[rgba(78,78,78,0.3)] rounded-xl border border-[rgba(255,255,255,0.05)] backdrop-blur-sm">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <div className="flex-1 mr-4">
            <input 
              type="text"
              value={amount}
              onChange={handleInputChange}
              className="bg-transparent font-['Montserrat'] font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-white w-full focus:outline-none transition-colors duration-300 focus:text-[#9b87f5]"
              placeholder="0.0"
            />
          </div>
          <div className="flex flex-col gap-[11px] h-full justify-center">
            <InputLabelButton 
              onClick={handleMaxClick}
              variant="max"
              className="hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Max
            </InputLabelButton>
            <InputLabelButton 
              onClick={handleHalfClick}
              variant="half"
              className="hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Half
            </InputLabelButton>
          </div>
        </div>
      </div>

      <StyledButton 
        variant="primary" 
        onClick={handleBridge}
        className="bg-gradient-to-r from-[#9b87f5] to-[#7c6ad6] hover:from-[#8a76e5] hover:to-[#6c5ac6] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Bridge
      </StyledButton>
    </StyledCard>
  );
};
