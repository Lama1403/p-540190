
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { CustomNavbar } from "@/components/layout/CustomNavbar";
import { PageHeader } from "@/components/ui/page-header";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sparkles, Star } from "lucide-react";

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
                  <Star className="w-12 h-12 text-white animate-[spin_4s_linear_infinite]" />
                </div>
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-[#F97316] animate-[bounce_2s_infinite]" />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <svg width="32" height="32" viewBox="0 0 1440 73" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0EA5E9] animate-[bounce_2s_infinite_0.5s]">
                    <mask id="path-1-inside-1_81_2163" fill="white">
                      <path d="M0 0H1440V72.3978H0V0Z"/>
                    </mask>
                    <path d="M1440 71.3978H0V73.3978H1440V71.3978Z" fill="#333333" mask="url(#path-1-inside-1_81_2163)"/>
                    <path d="M82.1261 53.3385C81.137 53.3385 80.3608 53.0603 79.7975 52.5039C79.2411 51.9475 78.9629 51.1438 78.9629 50.0929V46.023H80.3024V50.0414C80.3024 50.7832 80.4604 51.3224 80.7763 51.659C81.0992 51.9956 81.5526 52.1639 82.1364 52.1639C82.7203 52.1639 83.1702 51.9956 83.4862 51.659C83.8022 51.3224 83.9602 50.7832 83.9602 50.0414V46.023H85.279V50.0929C85.279 51.1438 84.9974 51.9475 84.4341 52.5039C83.8777 53.0603 83.1084 53.3385 82.1261 53.3385Z" fill="#00D0C6"/>
                    <path d="M90.2872 53.3076C89.8407 53.3076 89.432 53.2046 89.0611 52.9985C88.697 52.7924 88.4051 52.4833 88.1853 52.0712C87.9723 51.6522 87.8659 51.1232 87.8659 50.4844C87.8659 49.8387 87.9689 49.3098 88.175 48.8977C88.3879 48.4855 88.6764 48.1798 89.0405 47.9806C89.4045 47.7746 89.8201 47.6715 90.2872 47.6715C90.8299 47.6715 91.3073 47.7883 91.7194 48.0219C92.1384 48.2554 92.4681 48.5817 92.7086 49.0007C92.9558 49.4197 93.0795 49.9143 93.0795 50.4844C93.0795 51.0545 92.9558 51.5526 92.7086 51.9784C92.4681 52.3974 92.1384 52.7237 91.7194 52.9573C91.3073 53.1908 90.8299 53.3076 90.2872 53.3076Z" fill="#00D0C6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
