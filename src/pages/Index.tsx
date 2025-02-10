
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { CustomNavbar } from "@/components/layout/CustomNavbar";
import { PageHeader } from "@/components/ui/page-header";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [isSwapCompleted, setIsSwapCompleted] = useState(false);
  const [isBridgeCompleted, setIsBridgeCompleted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B2970] via-black to-[#173C3F]">
      <CustomNavbar />
      <main 
        style={{
          width: "100%",
          minHeight: "calc(100vh - 72.4px)", // Subtract navbar height
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}
      >
        <PageHeader 
          title="Swap & Bridge"
          description="Swap your tokens and bridge them to another network seamlessly"
          className={isBridgeCompleted ? "backdrop-blur-sm bg-white/5" : ""}
        />
        <div className={`flex items-center justify-center gap-8 flex-wrap w-full ${isBridgeCompleted ? "backdrop-blur-sm bg-white/5" : ""}`}>
          <TooltipProvider delayDuration={0}>
            <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''}`}>
              <SwapCard onSwapComplete={() => setIsSwapCompleted(true)} isCompleted={isSwapCompleted} />
            </div>
            <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${!isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''} ${isBridgeCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''}`}>
              <BridgeCard 
                isDisabled={!isSwapCompleted} 
                onBridgeComplete={() => setIsBridgeCompleted(true)}
              />
            </div>
          </TooltipProvider>
        </div>
        {isBridgeCompleted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/80 to-blue-900/80 backdrop-blur-lg" />
            <div className="relative p-8 text-center space-y-8 animate-scale-in">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center mx-auto animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                  <svg width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white animate-[spin_4s_linear_infinite]">
                    <g clipPath="url(#clip0_249_3836)">
                      <path d="M20.5724 17.2054L6.4431 24.0634L20.5724 30.6622V36L0 26.3782V21.1267L14.3044 14.1824L0 7.49717V2.17664L20.5724 11.7812V17.2054Z" fill="white"/>
                      <path d="M0 2.17658L5.44512 0L26 9.62188L20.5724 11.7812L0 2.17658Z" fill="#D8D8D8"/>
                      <path d="M20.5724 17.2053L26 15.0287V9.62183L20.5724 11.7811V17.2053Z" fill="#AFAFAF"/>
                      <path d="M20.5724 30.6622V20.0038L26 17.5336V33.8234L20.5724 36V30.6622Z" fill="#AFAFAF"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_249_3836">
                        <rect width="26" height="36" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-[#F97316] animate-[bounce_2s_infinite]" />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <svg width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#0EA5E9] animate-[bounce_2s_infinite_0.5s]">
                    <g clipPath="url(#clip0_249_3836)">
                      <path d="M20.5724 17.2054L6.4431 24.0634L20.5724 30.6622V36L0 26.3782V21.1267L14.3044 14.1824L0 7.49717V2.17664L20.5724 11.7812V17.2054Z" fill="white"/>
                      <path d="M0 2.17658L5.44512 0L26 9.62188L20.5724 11.7812L0 2.17658Z" fill="#D8D8D8"/>
                      <path d="M20.5724 17.2053L26 15.0287V9.62183L20.5724 11.7811V17.2053Z" fill="#AFAFAF"/>
                      <path d="M20.5724 30.6622V20.0038L26 17.5336V33.8234L20.5724 36V30.6622Z" fill="#AFAFAF"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_249_3836">
                        <rect width="26" height="36" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="mt-8 text-2xl font-bold text-white">Transaction Complete!</div>
                <div className="mt-2 text-gray-300">Your tokens have been successfully bridged.</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
