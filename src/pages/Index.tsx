
import { SwapCard } from "@/components/swap/SwapCard";
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
        }}
      >
        <div className="w-full max-w-md">
          <SwapCard />
        </div>
      </main>
    </Background>
  );
};

export default Index;
