import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface TokenSelectorProps {
  fromToken: string;
  toToken: string;
}

export const TokenSelector: React.FC<TokenSelectorProps> = ({ fromToken, toToken }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full"></div>
        <span className="font-medium">{fromToken}</span>
      </div>
      <ChevronRight className="mx-4 text-muted-foreground" />
      <div className="flex items-center gap-2">
        <span className="font-medium">{toToken}</span>
        <div className="w-8 h-8 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};