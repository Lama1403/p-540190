
import { Background } from "@/components/ui/background";
import { CustomNavbar } from "@/components/layout/CustomNavbar";
import { PageHeader } from "@/components/ui/page-header";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { useAccount } from 'wagmi';

const Bridge = () => {
  const [isBridgeCompleted, setIsBridgeCompleted] = useState(false);
  const { isConnected } = useAccount();

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
          title="Bridge your ZILs"
          description="Transfer your tokens to the Zilliqa Network."
          className={isBridgeCompleted ? "backdrop-blur-sm bg-white/5" : ""}
        />
        <div className={`flex items-center justify-center gap-8 flex-wrap w-full ${isBridgeCompleted ? "backdrop-blur-sm bg-white/5" : ""}`}>
          <TooltipProvider delayDuration={0}>
            <div className={`w-full max-w-md h-full flex items-center transition-all duration-500 relative ${!isConnected ? 'opacity-50 scale-95 pointer-events-none' : ''} ${isBridgeCompleted ? 'opacity-50 scale-95 pointer-events-none' : ''}`}>
              <BridgeCard 
                isDisabled={!isConnected} 
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
                  Bridge Complete!
                </h2>
                <p className="text-white text-lg">
                  Your tokens have been transferred to the Zilliqa Network ✨
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </Background>
  );
};

export default Bridge;
