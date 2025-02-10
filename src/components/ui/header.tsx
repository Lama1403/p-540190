
import { User, Wallet } from 'lucide-react';

export const Header = () => {
  return (
    <header className="box-border flex flex-row justify-between items-center px-10 py-3.5 w-full border-b border-[#333333]">
      {/* Icon Group & Staking Label */}
      <div className="flex items-center gap-4">
        {/* Layer_1 Logo */}
        <div className="relative w-[26px] h-[36px]">
          <div className="absolute inset-x-0 top-0 h-[33%] bg-[#D8D8D8]" />
          <div className="absolute left-0 right-[20.88%] top-[6.05%] bottom-0 bg-white" />
          <div className="absolute left-[79.12%] right-0 top-[26.73%] bottom-[52.21%] bg-[#AFAFAF]" />
          <div className="absolute left-[79.12%] right-0 top-[48.7%] bottom-0 bg-[#AFAFAF]" />
        </div>
        
        {/* Staking Label */}
        <span className="font-['Montserrat'] font-semibold text-[10.3px] leading-[82px] tracking-[0.02em] text-[#00D0C6]">
          Staking
        </span>
      </div>

      {/* Navbar Container */}
      <div className="flex flex-row items-center gap-2.5">
        {/* Logo Container */}
        <div className="flex justify-center items-center w-[38px] h-[34.73px] bg-[#1E1D1D] rounded-lg">
          <User className="w-4 h-4 text-[#05707E]" />
        </div>

        {/* Wallet Container */}
        <div className="flex flex-row items-center px-2.5 py-1 gap-2 w-[192.57px] h-[34.73px] bg-[#1E1D1D] rounded-lg">
          {/* Balance */}
          <span className="font-['Montserrat'] font-semibold text-[15px] text-white">
            Balance
          </span>

          {/* Frame 61 - Address Container */}
          <div className="flex flex-row items-center px-1.5 py-0.75 gap-1.25 bg-[#333333] rounded">
            <span className="font-['Montserrat'] font-semibold text-[11px] text-white underline">
              0xD81...C5af2
            </span>
            <div className="w-[19px] h-[19px] rounded-full bg-[#97CFE5]">
              <Wallet className="w-3 h-3 text-white m-1" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
