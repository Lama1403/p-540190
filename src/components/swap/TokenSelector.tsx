
import React from 'react';
import { ChevronRight } from "lucide-react";
import { InfoContainer } from '../shared/InfoContainer';

interface TokenSelectorProps {
  fromToken: string;
  toToken: string;
}

export const TokenSelector: React.FC<TokenSelectorProps> = ({ fromToken, toToken }) => {
  return (
    <InfoContainer
      leftIcon={<></>}
      mainText={fromToken}
      centerIcon={<ChevronRight className="w-[14px] h-[12px] text-white" />}
      rightIcon={<></>}
      rightText={toToken}
    />
  );
};
