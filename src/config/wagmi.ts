
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Using a public WalletConnect project ID
const walletProjectId = '965d2688f2fc05f0385e035cf0768d6e';

const { connectors } = getDefaultWallets({
  appName: 'ZIL Bridge',
  projectId: walletProjectId,
});

const chains = [mainnet, sepolia] as const;

export const config = createConfig({
  chains,
  connectors,
  transports: {
    [mainnet.id]: http('https://eth.llamarpc.com'),
    [sepolia.id]: http('https://rpc.sepolia.org'),
  },
});

export { chains };
