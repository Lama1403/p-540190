
import { SwapCard } from "@/components/swap/SwapCard";

const Index = () => {
  return (
    <main 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-black"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534884473008-38e5e89e0369?q=80&w=1974&auto=format&fit=crop')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
