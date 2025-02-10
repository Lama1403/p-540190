
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
        backgroundColor: "#000000",
        backgroundImage: "url('https://images.unsplash.com/photo-1534884473008-38e5e89e0369?q=80&w=1974&auto=format&fit=crop')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
