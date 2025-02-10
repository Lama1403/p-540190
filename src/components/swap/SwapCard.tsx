
import React from 'react';
import { StyledCard } from "@/components/ui/styled-card";
import { SwapHeader } from "./SwapHeader";
import { WalletInfo } from "./WalletInfo";
import { TokenSelector } from "./TokenSelector";
import { NetworkSelector } from "./NetworkSelector";
import { StyledButton } from "@/components/ui/styled-button";
import { useToast } from "@/hooks/use-toast";

export const SwapCard: React.FC = () => {
  const { toast } = useToast();

  const handleSwap = () => {
    toast({
      title: "Swap Initiated",
      description: "Converting Interim ZIL to Bridged ERC-20 ZIL...",
      variant: "default",
      className: "bg-[#1A1F2C] text-white border-[#2C9297] animate-fade-in",
    });
  };

  return (
    <StyledCard>
      <SwapHeader 
        title="1- Swap"
        description="Swap your interim ERC-20 ZIL for Bridged ERC-20 ZIL"
      />
      
      <div className="w-full h-[2px] bg-[rgba(194,194,194,0.1)]" />
      
      <div className="flex flex-col items-start gap-[14px] w-full">
        <WalletInfo 
          address="0xD81(...)C5af2"
          balance="777,000"
        />
        
        <TokenSelector 
          fromToken="Interim ZIL"
          toToken="eZIL"
        />
        
        <NetworkSelector 
          network="Zilliqa"
        />
      </div>
      
      <StyledButton variant="primary" onClick={handleSwap}>
        Swap
      </StyledButton>
    </StyledCard>
  );
};
