
import { SwapCard } from "@/components/swap/SwapCard";

const Index = () => {
  return (
    <main 
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('/d127b1b1-c1c5-472d-a36f-98dedde7aba1.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: "100vh",
        backgroundColor: '#000' // Fallback color while image loads
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
