
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";
import { CustomNavbar } from "@/components/layout/CustomNavbar";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  const [isSwapCompleted, setIsSwapCompleted] = useState(false);

  return (
    <Background>
      <CustomNavbar />
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
        <TooltipProvider delayDuration={0}>
          <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <SwapCard onSwapComplete={() => setIsSwapCompleted(true)} isCompleted={isSwapCompleted} />
          </div>
          <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${!isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <BridgeCard isDisabled={!isSwapCompleted} />
          </div>
        </TooltipProvider>
      </main>
    </Background>
  );
};

export default Index;

