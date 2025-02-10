
import { SwapCard } from "@/components/swap/SwapCard";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { Background } from "@/components/ui/background";

const Index = () => {
  return (
    <Background>
      <main 
        style={{
          width: "100%",
          height: "100vh",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap"
        }}
      >
        <div className="w-full max-w-md">
          <SwapCard />
        </div>
        <div className="w-full max-w-md">
          <BridgeCard />
        </div>
      </main>
    </Background>
  );
};

export default Index;
