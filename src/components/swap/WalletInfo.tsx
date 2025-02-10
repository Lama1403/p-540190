import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface WalletInfoProps {
  address: string;
  balance: string;
}

export const WalletInfo: React.FC<WalletInfoProps> = ({ address, balance }) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Wallet</p>
            <p className="font-medium">{address}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Balance</p>
            <p className="font-medium">{balance}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};