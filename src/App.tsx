
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
import { createConfig, WagmiConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

// Get your WalletConnect Project ID at https://cloud.walletconnect.com
const projectId = 'f96b598e64c9c6571f7d3dbd8ace7375';

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId,
});

const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http('https://eth.public-rpc.com'),
  },
  connectors,
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
