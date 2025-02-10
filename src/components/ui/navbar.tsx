
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const { toast } = useToast();

  return (
    <nav className="box-border flex flex-row justify-between items-center px-10 h-[72.4px] w-full border-b border-[#333333]">
      {/* Left side - Logo and Upgrade text */}
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 bg-[#00D0C6]" />
        </div>
        <span className="text-[#00D0C6] text-sm font-medium">
          Upgrade
        </span>
      </div>

      {/* Right side - RainbowKit Connect Button */}
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
          authenticationStatus,
        }) => {
          const ready = mounted && authenticationStatus !== 'loading';
          const connected = ready && account && chain;

          return (
            <div className="flex items-center gap-2">
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={() => {
                        openConnectModal();
                        toast({
                          title: "Connecting Wallet",
                          description: "Please select your wallet to connect...",
                          variant: "default",
                          className: "bg-[#1A1F2C] border-[#9b87f5] text-white rounded-lg shadow-lg animate-fade-in",
                          duration: 5000,
                        });
                      }}
                      className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#1E1D1D] rounded-lg text-white font-montserrat font-semibold"
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#ea384c] rounded-lg text-white font-montserrat font-semibold"
                    >
                      Wrong Network
                    </button>
                  );
                }

                return (
                  <>
                    {/* Balance Container */}
                    <div 
                      onClick={openAccountModal}
                      className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#1E1D1D] rounded-lg cursor-pointer"
                    >
                      <span className="font-montserrat font-semibold text-[15px] leading-[46px] text-white">
                        {account.displayBalance}
                      </span>
                    </div>
                    
                    {/* Wallet Address Container */}
                    <div 
                      onClick={openAccountModal}
                      className="flex items-center h-[34.73px] px-[9px] gap-[7px] bg-[#1E1D1D] rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center gap-[5px] px-[5px] py-[3px] bg-[#333333] rounded-[5px]">
                        <span className="font-montserrat font-semibold text-[11px] leading-[120%] text-white/80 underline">
                          {account.displayName}
                        </span>
                        <div className="w-[18.97px] h-[18.95px] rounded-full bg-[#97CFE5]" />
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </nav>
  );
};
