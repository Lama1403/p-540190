
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
        backgroundColor: "#1e40af", // Fallback color
        backgroundImage: "url('https://source.unsplash.com/featured/?cryptocurrency,blockchain')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md">
        <SwapCard />
      </div>
    </main>
  );
};

export default Index;
