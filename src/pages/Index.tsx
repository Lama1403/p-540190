
import { SwapCard } from "@/components/swap/SwapCard";

const Index = () => {
  return (
    <main 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/d127b1b1-c1c5-472d-a36f-98dedde7aba1.png')",
        minHeight: "100vh"
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
