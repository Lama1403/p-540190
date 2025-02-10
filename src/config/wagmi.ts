
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

const walletProjectId = '965d2688f2fc05f0385e035cf0768d6e';

const { connectors } = getDefaultWallets({
  appName: 'ZIL Bridge',
  projectId: walletProjectId,
  chains: [mainnet, sepolia],
});

const chains = [mainnet, sepolia] as const;

export const config = createConfig({
  chains,
  connectors,
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/demo'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/demo'),
  },
});

export { chains };
