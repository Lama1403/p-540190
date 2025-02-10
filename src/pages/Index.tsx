
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/ui/navbar";
import { useState } from "react";

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
        <div className={`w-full max-w-md h-full flex items-center transition-opacity duration-300 ${isSwapCompleted ? 'opacity-50' : 'opacity-100'}`}>
          <SwapCard onSwapComplete={() => setIsSwapCompleted(true)} />
        </div>
        <div className="w-full max-w-md h-full flex items-center">
          <BridgeCard isDisabled={!isSwapCompleted} />
        </div>
      </main>
    </Background>
  );
};

export default Index;
