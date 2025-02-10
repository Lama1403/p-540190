
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
    max: "w-[60.38px] h-[28.24px] bg-[#2B2970] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#87A1FF] capitalize transition-all hover:bg-[#00D0C6] hover:text-white hover:scale-105 active:bg-[#00b8af] active:scale-95",
    half: "w-[60.38px] h-[28.24px] bg-[#173C3F] rounded-[78.5256px] font-['Montserrat'] font-bold text-[10.3036px] leading-[120%] text-[#00D0C6] capitalize transition-all hover:bg-[#00D0C6] hover:text-white hover:scale-105 active:bg-[#00b8af] active:scale-95"
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
