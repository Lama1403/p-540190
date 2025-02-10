
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { config, chains } from './config/wagmi';

const queryClient = new QueryClient();

const App = () => (
  // Temporarily disabled RainbowKit integration
  // <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      {/* <RainbowKitProvider
        theme={darkTheme({
          accentColor: '#00D0C6',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        chains={chains}
        modalSize="compact"
      > */}
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
      {/* </RainbowKitProvider> */}
    </QueryClientProvider>
  // </WagmiProvider>
);

export default App;
