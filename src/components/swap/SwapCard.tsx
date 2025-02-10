import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SwapHeader } from "./SwapHeader";
import { WalletInfo } from "./WalletInfo";
import { TokenSelector } from "./TokenSelector";
import { NetworkSelector } from "./NetworkSelector";

export const SwapCard: React.FC = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <SwapHeader 
          title="1- Swap"
          description="Swap your interim ERC-20 ZIL for Bridged ERC-20 ZIL"
        />
        
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
        
        <Button className="w-full" size="lg">
          Swap
        </Button>
      </CardContent>
    </Card>
  );
};