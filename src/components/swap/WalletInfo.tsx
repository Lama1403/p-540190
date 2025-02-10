
import React from 'react';
import { InfoContainer } from '../shared/InfoContainer';

interface WalletInfoProps {
  address?: string;
  balance?: string;
}

export const WalletInfo: React.FC<WalletInfoProps> = () => {
  const displayAddress = '0x00...0000';
  const displayBalance = '0.00';

  return (
    <InfoContainer
      mainText={displayAddress}
      secondaryText="Wallet"
      rightText={displayBalance}
    />
  );
};
