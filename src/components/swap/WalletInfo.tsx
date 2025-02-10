
import React from 'react';
// import { useAccount, useBalance } from 'wagmi';

interface WalletInfoProps {
  address?: string;
  balance?: string;
}

export const WalletInfo: React.FC<WalletInfoProps> = () => {
  // Temporarily disabled wallet integration
  // const { address } = useAccount();
  // const { data: balanceData } = useBalance({
  //   address: address,
  // });

  const displayAddress = '0x00...0000';
  const displayBalance = '0.00';

  return (
    <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[#1E1D1D]/80 backdrop-blur-lg shadow-2xl rounded-[15px]">
      <div className="flex flex-row items-center gap-[15px] w-full">
        <div className="flex flex-row items-center gap-[5px]">
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
            Wallet
          </span>
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
            {displayAddress}
          </span>
        </div>
        <div className="flex flex-row justify-center items-center gap-[5px] ml-auto">
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
            Balance
          </span>
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
            {displayBalance}
          </span>
        </div>
      </div>
    </div>
  );
};
