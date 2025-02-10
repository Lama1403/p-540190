
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
    primary: "w-[207px] h-[38px] py-5 flex items-center justify-center bg-custom-secondary border border-custom-primary rounded-[127.434px] text-white font-montserrat font-bold text-[15.5071px] leading-[120%] tracking-[-0.03em] capitalize transition-all duration-200 hover:bg-custom-primary hover:border-custom-primary hover:scale-[1.02] active:bg-[#00b8af] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
    max: "w-[60.38px] h-[28.24px] bg-custom-accent rounded-[78.5256px] font-montserrat font-bold text-[10.3036px] leading-[120%] text-custom-accent2 capitalize transition-colors hover:bg-custom-primary hover:text-white active:bg-[#00b8af]",
    half: "w-[60.38px] h-[28.24px] bg-custom-secondary rounded-[78.5256px] font-montserrat font-bold text-[10.3036px] leading-[120%] text-custom-primary capitalize transition-colors hover:bg-custom-primary hover:text-white active:bg-[#00b8af]"
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
