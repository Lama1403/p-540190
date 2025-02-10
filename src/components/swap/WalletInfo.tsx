
import React from 'react';

interface WalletInfoProps {
  address: string;
  balance: string;
}

export const WalletInfo: React.FC<WalletInfoProps> = ({ address, balance }) => {
  return (
    <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[#1E1D1D] shadow-sm rounded-[15px]">
      <div className="flex flex-row items-center gap-[15px]">
        <div className="flex flex-row items-center gap-[5px]">
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
            Wallet
          </span>
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
            {address}
          </span>
        </div>
        <div className="flex flex-row justify-center items-center gap-[5px]">
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
            Balance
          </span>
          <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
            {balance}
          </span>
        </div>
      </div>
    </div>
  );
};
