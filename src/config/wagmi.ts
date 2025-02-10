
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Using a verified project ID from WalletConnect Cloud
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
    [mainnet.id]: http('https://eth.public-rpc.com'),
    [sepolia.id]: http('https://rpc2.sepolia.org'),
  },
});

export { chains };
