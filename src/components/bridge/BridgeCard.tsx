import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import { StyledCard } from "@/components/ui/styled-card";
import { StyledButton } from "@/components/ui/styled-button";
import { InputLabelButton } from "@/components/ui/input-label-button";
import { BridgeHeader } from "./BridgeHeader";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const BridgeCard: React.FC<{ isDisabled?: boolean }> = ({ isDisabled = true }) => {
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
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl animate-scale-in",
      duration: 2000,
    });
  };

  const handleHalfClick = () => {
    setAmount((maxAmount / 2).toString());
    toast({
      title: "🎯 Half Amount Set",
      description: `Set to half of maximum: ${maxAmount / 2} ZIL`,
      variant: "default",
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl animate-scale-in",
      duration: 2000,
    });
  };

  const handleBridge = () => {
    if (!amount) {
      toast({
        title: "⚠️ Error",
        description: "Please enter an amount to bridge",
        variant: "destructive",
        className: "bg-black/10 backdrop-blur-lg border-red-500/20 text-red-500 rounded-xl shadow-2xl animate-fade-in",
        duration: 3000,
      });
      return;
    }
    
    toast({
      title: "🌉 Bridge Initiated",
      description: `Bridging ${amount} ZIL to Zilliqa Network...`,
      variant: "default",
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl animate-fade-in",
      duration: 3000,
    });

    setTimeout(() => {
      toast({
        title: "⏳ Processing Bridge",
        description: "Please wait while we process your transaction...",
        variant: "default",
        className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl animate-fade-in",
        duration: 2500,
      });
    }, 2000);
  };

  return (
    <StyledCard className={`transition-opacity duration-300 ${isDisabled ? 'opacity-50' : 'opacity-100'}`}>
      <div className="relative w-full">
        <BridgeHeader 
          title="2- Bridge"
          description="Bridge your Interim ERC-20 ZIL to Zilliqa Network"
        />
      </div>
      
      <div className="w-full h-[2px] bg-[rgba(194,194,194,0.1)]" />
      
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

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-full transition-all duration-300 rounded-[15px] group">
            <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(85,85,85,0.15),0_0_15px_rgba(51,51,51,0.1),0_0_45px_rgba(34,34,34,0.15)]">
              <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#333333] to-[#555555] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
              <div className="relative bg-[#1E1D1D]/80 rounded-[15px]">
                <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px]">
                  <div className="flex flex-row items-center gap-[15px]">
                    <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-[#2C9297]" />
                    <span className="font-montserrat font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
                      ERC-20 ZIL
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[6px] w-[14px] h-[54px]">
                    <ChevronRight className="w-[14px] h-[12px] text-white" />
                  </div>
                  <div className="flex flex-row items-center gap-[15px]">
                    <span className="font-montserrat font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
                      Interim ZIL
                    </span>
                    <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-black" />
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
          <p className="text-sm">Token types being bridged between networks</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-full transition-all duration-300 rounded-[15px] group">
            <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(0,208,198,0.15),0_0_15px_rgba(0,208,198,0.1),0_0_45px_rgba(82,46,255,0.15)]">
              <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#00D0C6] to-[#522EFF] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
              <div className="relative bg-[#1E1D1D]/80 rounded-[15px]">
                <div className="flex flex-row justify-between items-center p-[15px] w-full h-[97.49px] bg-gradient-to-r from-[rgba(78,78,78,0.3)] via-[rgba(32,40,50,0.25)] to-[rgba(78,78,78,0.3)] rounded-[15px]">
                  <div className="flex flex-row justify-between items-center w-full h-full">
                    <div className="flex-1 mr-4 relative">
                      <input 
                        type="text"
                        value={amount}
                        onChange={handleInputChange}
                        className="bg-transparent font-montserrat font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-white w-full focus:outline-none relative z-10 transition-all duration-300
                        focus:bg-clip-text focus:animate-gradient-x
                        [&:focus+.input-border]:opacity-100 
                        [&:focus+.input-border]:animate-[gradient_3s_ease-in-out_infinite]"
                        placeholder="0.0"
                      />
                      <div className="input-border absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300
                        bg-gradient-to-r from-[#8E9196] via-[#555555] to-[#333333] p-[1px] -m-[1px]
                        bg-[length:200%_200%]" />
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

      <StyledButton 
        variant="primary" 
        onClick={handleBridge}
        disabled={isDisabled}
      >
        Bridge
      </StyledButton>
    </StyledCard>
  );
};
