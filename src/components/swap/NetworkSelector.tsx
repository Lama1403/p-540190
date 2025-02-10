import React from 'react';
import { Button } from "@/components/ui/button";

interface NetworkSelectorProps {
  network: string;
}

export const NetworkSelector: React.FC<NetworkSelectorProps> = ({ network }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full"></div>
        <span className="font-medium">{network}</span>
      </div>
      <span className="text-sm text-muted-foreground">Network</span>
    </div>
  );
};