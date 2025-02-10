
import React from 'react';
import { StyledCard } from "@/components/ui/styled-card";
import { SwapHeader } from "./SwapHeader";
import { WalletInfo } from "./WalletInfo";
import { TokenSelector } from "./TokenSelector";
import { NetworkSelector } from "./NetworkSelector";
import { StyledButton } from "@/components/ui/styled-button";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
      </div>
      
      <div className="w-full h-[2px] bg-[rgba(194,194,194,0.1)]" />
      
      <div className="flex flex-col items-start gap-[14px] w-full">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full">
              <WalletInfo 
                address="0xD81(...)C5af2"
                balance="777,000"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="right" 
            align="center" 
            className="bg-[#1A1F2C] text-white border-[#9b87f5] shadow-lg"
            sideOffset={5}
          >
            <p className="text-sm">Your connected wallet address and current balance</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full">
              <TokenSelector 
                fromToken="Interim ZIL"
                toToken="eZIL"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="right" 
            align="center" 
            className="bg-[#1A1F2C] text-white border-[#9b87f5] shadow-lg"
            sideOffset={5}
          >
            <p className="text-sm">Convert your Interim ZIL tokens to Bridged ERC-20 ZIL (eZIL)</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full">
              <NetworkSelector 
                network="Zilliqa"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="right" 
            align="center" 
            className="bg-[#1A1F2C] text-white border-[#9b87f5] shadow-lg"
            sideOffset={5}
          >
            <p className="text-sm">The network where your tokens will be swapped</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <StyledButton variant="primary" onClick={handleSwap}>
        Swap
      </StyledButton>
    </StyledCard>
  );
};
