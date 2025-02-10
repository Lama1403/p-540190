
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InputLabelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'max' | 'half';
  className?: string;
}

export const InputLabelButton: React.FC<InputLabelButtonProps> = ({ 
  children, 
  variant = 'max',
  className,
  ...props 
}) => {
  const baseStyles = {
    max: "w-[60.38px] h-[28.24px] bg-[#7E69AB] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#D3E4FD] capitalize transition-all hover:bg-[#8f7abc] hover:text-white hover:scale-105 active:bg-[#6d5b96] active:scale-95",
    half: "w-[60.38px] h-[28.24px] bg-[#0FA0CE] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#F2FCE2] capitalize transition-all hover:bg-[#1EAEDB] hover:text-white hover:scale-105 active:bg-[#0d8eb8] active:scale-95"
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
