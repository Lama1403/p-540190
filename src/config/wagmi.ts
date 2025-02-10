
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

const walletProjectId = '965d2688f2fc05f0385e035cf0768d6e';

const { wallets } = getDefaultWallets({
  appName: 'ZIL Bridge',
  projectId: walletProjectId,
});

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: wallets,
});

export const chains = [mainnet, sepolia];
