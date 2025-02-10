
import React, { useState } from 'react';
import { StyledCard } from "@/components/ui/styled-card";
import { StyledButton } from "@/components/ui/styled-button";
import { BridgeHeader } from "./BridgeHeader";
import { useToast } from "@/hooks/use-toast";
import { AddressInfo } from "./components/AddressInfo";
import { TokenInfo } from "./components/TokenInfo";
import { AmountInput } from "./components/AmountInput";

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
      
      <AddressInfo />
      <TokenInfo />
      <AmountInput 
        amount={amount}
        onAmountChange={handleInputChange}
        onMaxClick={handleMaxClick}
        onHalfClick={handleHalfClick}
      />

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
