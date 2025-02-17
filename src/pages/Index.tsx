
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";
import { CustomNavbar } from "@/components/layout/CustomNavbar";
import { PageHeader } from "@/components/ui/page-header";
import { useState, useEffect, useRef } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sparkles, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAccount } from 'wagmi';

const Index = () => {
  const [isSwapCompleted, setIsSwapCompleted] = useState(false);
  const [isBridgeCompleted, setIsBridgeCompleted] = useState(false);
  const bridgeRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isBridgeCompleted) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isBridgeCompleted]);

  useEffect(() => {
    if (isSwapCompleted && isMobile && bridgeRef.current) {
      setTimeout(() => {
        bridgeRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 1000);
    }
  }, [isSwapCompleted, isMobile]);

  return (
    <Background>
      <CustomNavbar />
      <main 
        style={{
          width: "100%",
          minHeight: "calc(100vh - 72.4px)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}
      >
        <PageHeader 
          title="Upgrade your ZILs"
          description="A simple 2 step process to bridge your ERC-20 ZIL to Zilliqa."
          className={isBridgeCompleted ? "backdrop-blur-sm bg-white/5" : ""}
        />
        <div className={`flex items-center justify-center gap-8 flex-wrap w-full ${isBridgeCompleted ? "backdrop-blur-sm bg-white/5" : ""}`}>
          <TooltipProvider delayDuration={0}>
            <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${isSwapCompleted || !isConnected ? 'opacity-50 scale-95 pointer-events-none' : ''}`}>
              <SwapCard onSwapComplete={() => setIsSwapCompleted(true)} isCompleted={isSwapCompleted} isDisabled={!isConnected} />
            </div>
            <div 
              ref={bridgeRef}
              className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${!isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''} ${isBridgeCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''}`}
            >
              <BridgeCard 
                isDisabled={!isSwapCompleted} 
                onBridgeComplete={() => setIsBridgeCompleted(true)}
              />
            </div>
          </TooltipProvider>
        </div>
        {isBridgeCompleted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-lg border border-white/20" />
            <div className="relative p-8 text-center space-y-8 animate-scale-in">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#00D0C6] to-[#522EFF] flex items-center justify-center mx-auto animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                  <Star className="w-12 h-12 text-white animate-[spin_4s_linear_infinite]" />
                </div>
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-white animate-[bounce_2s_infinite]" />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <Sparkles className="w-8 h-8 text-white animate-[bounce_2s_infinite_0.5s]" />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white animate-[pulse_2s_ease-in-out_infinite]">
                  Upgrade Complete!
                </h2>
                <p className="text-white text-lg">
                  Your tokens have ascended to the Zilliqa Network ✨
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </Background>
  );
};

export default Index;
