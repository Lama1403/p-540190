
import { SwapCard } from "@/components/swap/SwapCard";

const Index = () => {
  return (
    <main 
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e40af 0%, #6E59A5 50%, #9b87f5 100%)",
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
