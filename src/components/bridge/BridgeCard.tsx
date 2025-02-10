
import React, { useState } from 'react';
import { StyledCard } from "@/components/ui/styled-card";
import { StyledButton } from "@/components/ui/styled-button";
import { CardHeader } from "@/components/shared/CardHeader";
import { useToast } from "@/hooks/use-toast";
import { AddressInfo } from "./components/AddressInfo";
import { TokenInfo } from "./components/TokenInfo";
import { AmountInput } from "./components/AmountInput";
import { Check } from "lucide-react";

export const BridgeCard: React.FC<{ 
  isDisabled?: boolean;
  onBridgeComplete?: () => void;
}> = ({ 
  isDisabled = true,
  onBridgeComplete 
}) => {
  const [amount, setAmount] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('Bridge');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const maxAmount = 1000;
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSuccess) return;
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setIsError(false);
    }
  };

  const handleMaxClick = () => {
    if (isSuccess) return;
    setAmount(maxAmount.toString());
    setIsError(false);
    toast({
      title: "💎 Maximum Amount Set",
      description: `Set to maximum available: ${maxAmount} ZIL`,
      variant: "default",
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-scale-in w-[90vw] sm:w-auto mr-0 ml-auto",
      duration: 2000,
    });
  };

  const handleHalfClick = () => {
    if (isSuccess) return;
    setAmount((maxAmount / 2).toString());
    setIsError(false);
    toast({
      title: "🎯 Minimum Amount Set",
      description: `Set to minimum amount: ${maxAmount / 2} ZIL`,
      variant: "default",
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-scale-in w-[90vw] sm:w-auto mr-0 ml-auto",
      duration: 2000,
    });
  };

  const handleBridge = () => {
    if (isSuccess) return;
    
    if (!amount || parseFloat(amount) === 0) {
      setIsError(true);
      setButtonText('Enter Amount');
      toast({
        title: "⚠️ Error",
        description: "Please enter an amount to bridge",
        variant: "destructive",
        className: "bg-black/10 backdrop-blur-lg border-red-500/20 text-red-500 rounded-[15px] shadow-2xl animate-fade-in w-[90vw] sm:w-auto mr-0 ml-auto",
        duration: 3000,
      });
      setTimeout(() => setButtonText('Bridge'), 3000);
      return;
    }
    
    setIsError(false);
    setButtonText('Initiating Bridge...');
    toast({
      title: "🌉 Bridge Initiated",
      description: `Bridging ${amount} ZIL to Zilliqa Network...`,
      variant: "default",
      className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-fade-in w-[90vw] sm:w-auto mr-0 ml-auto",
      duration: 3000,
    });

    setTimeout(() => {
      setButtonText('Processing...');
      toast({
        title: "⏳ Processing Bridge",
        description: "Please wait while we process your transaction...",
        variant: "default",
        className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-fade-in w-[90vw] sm:w-auto mr-0 ml-auto",
        duration: 2500,
      });
      
      setTimeout(() => {
        setButtonText('Success');
        setIsSuccess(true);
        onBridgeComplete?.();
        toast({
          title: "✅ Bridge Complete",
          description: "Your tokens have been successfully bridged",
          variant: "default",
          className: "bg-black/10 backdrop-blur-lg border border-white/20 text-white rounded-[15px] shadow-2xl animate-fade-in w-[90vw] sm:w-auto mr-0 ml-auto",
          duration: 4000,
        });
      }, 2500);
    }, 2000);
  };

  return (
    <StyledCard className={`transition-opacity duration-300 ${isDisabled ? 'opacity-50' : 'opacity-100'}`}>
      <div className="relative w-full">
        <CardHeader 
          title="2- Bridge"
          description="Bridge your Interim ERC-20 ZIL to Zilliqa Network"
        />
      </div>
      
      <div className="w-full h-[2px] bg-[rgba(194,194,194,0.1)]" />
      
      <AddressInfo />
      <TokenInfo />
      <AmountInput 
        amount={amount}
        onAmountChange={handleInputChange}
        onMaxClick={handleMaxClick}
        onHalfClick={handleHalfClick}
        error={isError}
        disabled={isSuccess}
      />

      <StyledButton 
        variant="primary" 
        onClick={handleBridge}
        disabled={isDisabled || isSuccess}
      >
        {isSuccess ? (
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" /> 
            <span className="animate-fade-in">Success</span>
          </div>
        ) : (
          buttonText
        )}
      </StyledButton>
    </StyledCard>
  );
};

