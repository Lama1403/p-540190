
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
    // Success toast
    toast({
      title: "✨ Swap Initiated",
      description: "Converting Interim ZIL to Bridged ERC-20 ZIL...",
      variant: "default",
      className: "bg-[#F2FCE2] border-[#9b87f5] text-[#1A1F2C] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm animate-fade-in",
      duration: 3000,
    });

    // Show progress toast after delay
    setTimeout(() => {
      toast({
        title: "🔄 Processing",
        description: "Transaction in progress...",
        variant: "default",
        className: "bg-[#D3E4FD] border-[#9b87f5] text-[#1A1F2C] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm animate-fade-in",
        duration: 2000,
      });
    }, 1500);
  };

  return (
    <StyledCard className="bg-gradient-to-br from-[rgba(30,29,29,0.6)] to-[rgba(30,29,29,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.1)]">
      <SwapHeader 
        title="1- Swap"
        description="Swap your interim ERC-20 ZIL for Bridged ERC-20 ZIL"
      />
      
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[rgba(194,194,194,0.2)] to-transparent" />
      
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
      
      <StyledButton 
        variant="primary" 
        onClick={handleSwap}
        className="bg-gradient-to-r from-[#9b87f5] to-[#7c6ad6] hover:from-[#8a76e5] hover:to-[#6c5ac6] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Swap
      </StyledButton>
    </StyledCard>
  );
};
