
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";

const Index = () => {
  return (
    <Background>
      <main 
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: "1rem",
          display: "flex",
          alignItems: "center", // Changed back to center for vertical alignment
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap"
        }}
      >
        <div className="w-full max-w-md h-full flex items-center"> {/* Added flex and items-center */}
          <SwapCard />
        </div>
        <div className="w-full max-w-md h-full flex items-center"> {/* Added flex and items-center */}
          <BridgeCard />
        </div>
      </main>
    </Background>
  );
};

export default Index;
