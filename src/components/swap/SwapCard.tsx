
import React from 'react';
import { StyledCard } from "@/components/ui/styled-card";
import { SwapHeader } from "./SwapHeader";
import { WalletInfo } from "./WalletInfo";
import { TokenSelector } from "./TokenSelector";
import { NetworkSelector } from "./NetworkSelector";
import { StyledButton } from "@/components/ui/styled-button";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface SwapCardProps {
  onSwapComplete?: () => void;
  isCompleted?: boolean;
}

export const SwapCard: React.FC<SwapCardProps> = ({ onSwapComplete, isCompleted }) => {
  const { toast } = useToast();

  const handleSwap = () => {
    // Success toast
    toast({
      title: "✨ Swap Initiated",
      description: "Converting Interim ZIL to Bridged ERC-20 ZIL...",
      variant: "default",
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl animate-fade-in",
      duration: 3000,
    });

    // Show progress toast after delay
    setTimeout(() => {
      toast({
        title: "🔄 Processing",
        description: "Transaction in progress...",
        variant: "default",
        className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl animate-fade-in",
        duration: 2000,
      });

      // Simulate swap completion after processing
      setTimeout(() => {
        toast({
          title: "✅ Swap Complete",
          description: "You can now proceed to bridge your tokens",
          variant: "default",
          className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl animate-fade-in",
          duration: 3000,
        });
        onSwapComplete?.();
      }, 2000);
    }, 1500);
  };

  return (
    <StyledCard>
      <div className="relative w-full">
        <SwapHeader 
          title="1- Swap"
          description="Swap your interim ERC-20 ZIL for Bridged ERC-20 ZIL"
        />
        {isCompleted && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/5 transition-colors cursor-help touch:cursor-pointer">
                <Info className="w-5 h-5 text-[#9b87f5]" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" align="center" className="bg-[#1A1F2C] text-white border-[#9b87f5] shadow-lg">
              <p className="text-sm">Swap completed! You can now proceed to bridge your tokens to the Zilliqa network.</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      
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
