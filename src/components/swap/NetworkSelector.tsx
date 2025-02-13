
import React from 'react';
import { InfoContainer } from '../shared/InfoContainer';

interface NetworkSelectorProps {
  network: string;
}

export const NetworkSelector: React.FC<NetworkSelectorProps> = ({ network }) => {
  return (
    <InfoContainer
      leftIcon={<></>}
      mainText={network}
      rightText="Network"
    />
  );
};
