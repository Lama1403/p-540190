
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { 
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets
} from '@rainbow-me/rainbowkit';
import { createConfig, WagmiConfig, http, fallback } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

const projectId = '965d2688f2fc05f0385e035cf0768d6e';

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId,
});

const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: fallback([
      http('https://eth.llamarpc.com'),
      http('https://rpc.ankr.com/eth'),
      http('https://cloudflare-eth.com'),
    ], { rank: true }),
  },
  connectors,
  retryCount: 3,
  retryDelay: 1500,
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
        theme={darkTheme({
          accentColor: '#00D0C6',
          borderRadius: 'medium',
        })}
        coolMode
        showRecentTransactions={true}
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </QueryClientProvider>
);

export default App;
