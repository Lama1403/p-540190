
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
        backgroundImage: "url('/lovable-uploads/1e8085c9-d2b3-4469-8ac0-72c70c657de9.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // Fallback gradient that matches the image colors with black as main color
        background: "linear-gradient(135deg, #000000 0%, #7E69AB 50%, #2C3E50 100%)",
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
