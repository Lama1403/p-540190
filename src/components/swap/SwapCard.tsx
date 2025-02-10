
import React from 'react';
import { StyledCard } from "@/components/ui/styled-card";
import { SwapHeader } from "./SwapHeader";
import { WalletInfo } from "./WalletInfo";
import { TokenSelector } from "./TokenSelector";
import { NetworkSelector } from "./NetworkSelector";
import { StyledButton } from "@/components/ui/styled-button";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Check } from "lucide-react";

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
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-fade-in",
      duration: 3000,
    });

    // Show progress toast after delay
    setTimeout(() => {
      toast({
        title: "🔄 Processing",
        description: "Transaction in progress...",
        variant: "default",
        className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-fade-in",
        duration: 2000,
      });

      // Simulate swap completion after processing
      setTimeout(() => {
        toast({
          title: "✅ Swap Complete",
          description: "You can now proceed to bridge your tokens",
          variant: "default",
          className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-fade-in",
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
            <div className="w-full transition-all duration-300 rounded-[15px] group">
              <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(85,85,85,0.15),0_0_15px_rgba(51,51,51,0.1),0_0_45px_rgba(34,34,34,0.15)]">
                <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#1A1A1A] via-[#243949] to-[#404040] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
                <div className="relative bg-[#1E1D1D]/80 rounded-[15px]">
                  <WalletInfo 
                    address="0xD81(...)C5af2"
                    balance="777,000"
                  />
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="top" 
            align="center" 
            className="bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl max-w-[200px] break-words whitespace-normal"
            sideOffset={5}
          >
            <p className="text-sm">Your connected wallet address and current balance</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full transition-all duration-300 rounded-[15px] group">
              <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(85,85,85,0.15),0_0_15px_rgba(51,51,51,0.1),0_0_45px_rgba(34,34,34,0.15)]">
                <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#1A1A1A] via-[#243949] to-[#404040] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
                <div className="relative bg-[#1E1D1D]/80 rounded-[15px]">
                  <TokenSelector 
                    fromToken="Interim ZIL"
                    toToken="eZIL"
                  />
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="top" 
            align="center" 
            className="bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl max-w-[200px] break-words whitespace-normal"
            sideOffset={5}
          >
            <p className="text-sm">Convert your Interim ZIL tokens to Bridged ERC-20 ZIL (eZIL)</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full transition-all duration-300 rounded-[15px] group">
              <div className="relative p-[1px] rounded-[15px] group-hover:shadow-[0_0_30px_rgba(85,85,85,0.15),0_0_15px_rgba(51,51,51,0.1),0_0_45px_rgba(34,34,34,0.15)]">
                <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#1A1A1A] via-[#243949] to-[#404040] opacity-0 group-hover:opacity-100 animate-[gradient_6s_ease_infinite] group-hover:bg-[length:200%_200%]" />
                <div className="relative bg-[#1E1D1D]/80 rounded-[15px]">
                  <NetworkSelector 
                    network="Zilliqa"
                  />
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="top" 
            align="center" 
            className="bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl max-w-[200px] break-words whitespace-normal"
            sideOffset={5}
          >
            <p className="text-sm">The network where your tokens will be swapped</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <StyledButton 
        variant="primary" 
        onClick={handleSwap}
        disabled={isCompleted}
        isCompleted={isCompleted}
      >
        {isCompleted ? (
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" /> 
            <span className="animate-fade-in">Success</span>
          </div>
        ) : (
          "Swap"
        )}
      </StyledButton>
    </StyledCard>
  );
};
