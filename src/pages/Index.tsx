
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/ui/navbar";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const Index = () => {
  const [isSwapCompleted, setIsSwapCompleted] = useState(false);

  return (
    <Background>
      <Navbar />
      <main 
        style={{
          width: "100%",
          minHeight: "calc(100vh - 72.4px)", // Subtract navbar height
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap"
        }}
      >
        <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <SwapCard onSwapComplete={() => setIsSwapCompleted(true)} />
          {isSwapCompleted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute -right-8 top-4 cursor-help">
                  <Info className="w-5 h-5 text-[#9b87f5]" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-[#1A1F2C] text-white border-[#9b87f5] shadow-lg">
                <p className="text-sm">Swap completed! Move on to bridging.</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${!isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <BridgeCard isDisabled={!isSwapCompleted} />
          {!isSwapCompleted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute -right-8 top-4 cursor-help">
                  <Info className="w-5 h-5 text-[#8E9196]" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-[#1A1F2C] text-white border-[#8E9196] shadow-lg">
                <p className="text-sm">Complete the swap first to unlock bridging.</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </main>
    </Background>
  );
};

export default Index;

