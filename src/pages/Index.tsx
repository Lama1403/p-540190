
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";
import { CustomNavbar } from "@/components/layout/CustomNavbar";
import { PageHeader } from "@/components/ui/page-header";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Trophy } from "lucide-react";

const Index = () => {
  const [isSwapCompleted, setIsSwapCompleted] = useState(false);
  const [isBridgeCompleted, setIsBridgeCompleted] = useState(false);

  return (
    <Background>
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
        {isBridgeCompleted && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
            <div className="text-center space-y-4 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-custom-primary flex items-center justify-center mx-auto animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Level Up Complete!</h2>
              <p className="text-gray-300">Your tokens have been successfully upgraded to Zilliqa Network</p>
            </div>
          </div>
        )}
        <PageHeader 
          title="Swap & Bridge"
          description="Swap your tokens and bridge them to another network seamlessly"
        />
        <div className="flex items-center justify-center gap-8 flex-wrap w-full">
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
      </main>
    </Background>
  );
};

export default Index;
