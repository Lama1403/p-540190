
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Using a public WalletConnect project ID - consider getting your own at https://cloud.walletconnect.com
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
    [mainnet.id]: http('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'),
    [sepolia.id]: http('https://sepolia.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'),
  },
});

export { chains };
