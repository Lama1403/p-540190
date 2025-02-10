
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from './button';

const isDevelopment = window.location.hostname === 'localhost' || 
                     window.location.hostname.includes('preview');

export const Navbar = () => {
  const [isDummyConnected, setIsDummyConnected] = React.useState(false);

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

      {/* Right side - Conditional Button Rendering */}
      {isDevelopment ? (
        <div className="flex items-center gap-2">
          {!isDummyConnected ? (
            <Button
              onClick={() => setIsDummyConnected(true)}
              className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#1E1D1D] rounded-lg text-white font-montserrat font-semibold"
            >
              Connect Wallet
            </Button>
          ) : (
            <>
              <div className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#1E1D1D] rounded-lg cursor-pointer">
                <span className="font-montserrat font-semibold text-[15px] leading-[46px] text-white">
                  0.5 ETH
                </span>
              </div>
              <div className="flex items-center h-[34.73px] px-[9px] gap-[7px] bg-[#1E1D1D] rounded-lg cursor-pointer">
                <div className="flex items-center gap-[5px] px-[5px] py-[3px] bg-[#333333] rounded-[5px]">
                  <span className="font-montserrat font-semibold text-[11px] leading-[120%] text-white/80 underline">
                    0x1234...5678
                  </span>
                  <div className="w-[18.97px] h-[18.95px] rounded-full bg-[#97CFE5]" />
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            const ready = mounted;
            const connected = ready && account && chain;

            return (
              <div className="flex items-center gap-2">
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#1E1D1D] rounded-lg text-white font-montserrat font-semibold"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  return (
                    <>
                      <div 
                        onClick={openAccountModal}
                        className="flex items-center justify-center h-[34.73px] px-[9px] bg-[#1E1D1D] rounded-lg cursor-pointer"
                      >
                        <span className="font-montserrat font-semibold text-[15px] leading-[46px] text-white">
                          {account.displayBalance}
                        </span>
                      </div>
                      
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
      )}
    </nav>
  );
};
