
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";
import { CustomNavbar } from "@/components/layout/CustomNavbar";
import { PageHeader } from "@/components/ui/page-header";
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
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}
      >
        <PageHeader 
          title="Swap & Bridge"
          description="Swap your tokens and bridge them to another network seamlessly"
        />
        <div className="flex items-center justify-center gap-8 flex-wrap w-full">
          <TooltipProvider delayDuration={0}>
            <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''}`}>
              <SwapCard onSwapComplete={() => setIsSwapCompleted(true)} isCompleted={isSwapCompleted} />
            </div>
            <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${!isSwapCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''}`}>
              <BridgeCard isDisabled={!isSwapCompleted} />
            </div>
          </TooltipProvider>
        </div>
      </main>
    </Background>
  );
};

export default Index;
