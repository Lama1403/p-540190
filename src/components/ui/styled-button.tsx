
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'max' | 'half';
  className?: string;
}

export const StyledButton: React.FC<StyledButtonProps> = ({ 
  children, 
  variant = 'primary',
  className,
  ...props 
}) => {
  const baseStyles = {
    primary: "w-[207px] h-[48px] py-6 flex items-center justify-center bg-[#173C3F] border border-[#00D0C6] rounded-[127.434px] text-white font-bold text-[15.5071px] leading-[120%] tracking-[-0.03em] capitalize transition-all duration-200 hover:bg-[#00D0C6] hover:border-[#00D0C6] hover:scale-[1.02] active:bg-[#00b8af] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
    max: "w-[60.38px] h-[28.24px] bg-[#2B2970] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#87A1FF] capitalize transition-colors hover:bg-[#00D0C6] hover:text-white active:bg-[#00b8af]",
    half: "w-[60.38px] h-[28.24px] bg-[#173C3F] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#00D0C6] capitalize transition-colors hover:bg-[#00D0C6] hover:text-white active:bg-[#00b8af]"
  };

  return (
    <Button 
      className={cn(baseStyles[variant], className)}
      {...props}
    >
      {children}
    </Button>
  );
};

