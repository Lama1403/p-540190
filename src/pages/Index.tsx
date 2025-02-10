
import { SwapCard } from "@/components/swap/SwapCard";

const Index = () => {
  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/lovable-uploads/0613de0c-9adc-49cd-ad34-4ba483cd389e.png')"
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
