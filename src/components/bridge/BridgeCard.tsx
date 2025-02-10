
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const BridgeCard: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const maxAmount = 1000; // This would typically come from your wallet/balance

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleMaxClick = () => {
    setAmount(maxAmount.toString());
  };

  const handleHalfClick = () => {
    setAmount((maxAmount / 2).toString());
  };

  return (
    <Card className="w-full max-w-[474.86px] bg-[rgba(30,29,29,0.5)] shadow-lg rounded-[15px] p-[35px] border-0">
      <CardContent className="p-0 flex flex-col items-center gap-[19px] w-full max-w-[404.86px]">
        {/* Header */}
        <header className="flex flex-col items-center gap-[15px] w-full">
          <div className="flex flex-row items-center w-full">
            <h1 className="font-['Montserrat'] font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-[#E1E2E2] flex items-center w-full">
              2- Bridge
            </h1>
          </div>
          <p className="font-['Montserrat'] font-normal text-[12px] leading-[120%] tracking-[0.01em] text-[#E1E2E2] flex items-center w-full">
            Bridge your Interim ERC-20 ZIL to Zilliqa Network
          </p>
        </header>

        {/* Divider */}
        <div className="w-full h-[2px] bg-[rgba(194,194,194,0.1)]" />

        {/* Bridge Info */}
        <div className="flex flex-row items-start justify-between w-full h-[16px] px-[10px]">
          <div className="flex flex-row items-center gap-[5px]">
            <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
              From
            </span>
            <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
              0xD81...C5af2
            </span>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
              To
            </span>
            <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
              zil1...4a9p
            </span>
          </div>
        </div>

        {/* Token Selection */}
        <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[#1E1D1D] shadow-sm rounded-[15px]">
          <div className="flex flex-row items-center gap-[15px]">
            <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-[#2C9297]" />
            <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
              ERC-20 ZIL
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-[6px] w-[14px] h-[54px]">
            <ChevronRight className="w-[14px] h-[12px] text-white" />
          </div>
          <div className="flex flex-row items-center gap-[15px]">
            <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
              Interim ZIL
            </span>
            <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-black" />
          </div>
        </div>

        {/* Input Section */}
        <div className="flex flex-row justify-between items-center p-[15px] w-full h-[97.49px] bg-gradient-to-r from-[rgba(78,78,78,0.3)] via-[rgba(32,40,50,0.25)] to-[rgba(78,78,78,0.3)] rounded-[15px]">
          <div className="flex flex-row justify-between items-center w-full h-full">
            <div className="flex-1 mr-4">
              <input 
                type="text"
                value={amount}
                onChange={handleInputChange}
                className="bg-transparent font-['Montserrat'] font-bold text-[33px] leading-[120%] tracking-[-0.02em] text-white w-full focus:outline-none"
                placeholder="0.0"
              />
            </div>
            <div className="flex flex-col gap-[11px] h-full justify-center">
              <button 
                onClick={handleMaxClick}
                className="w-[60.38px] h-[28.24px] bg-[#2B2970] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#87A1FF] capitalize transition-colors active:bg-[#201f5c] hover:bg-[#252156]"
              >
                Max
              </button>
              <button 
                onClick={handleHalfClick}
                className="w-[60.38px] h-[28.24px] bg-[#173C3F] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#00D0C6] capitalize transition-colors active:bg-[#122e30] hover:bg-[#153436]"
              >
                Half
              </button>
            </div>
          </div>
        </div>

        {/* Bridge Button */}
        <Button 
          className="w-[207px] h-[33px] bg-[#173C3F] border border-[#00D0C6] rounded-[127.434px] text-white font-bold text-[15.5071px] leading-[120%] tracking-[-0.03em] capitalize transition-colors active:bg-[#122e30] hover:bg-[#153436]"
        >
          Bridge
        </Button>
      </CardContent>
    </Card>
  );
};
