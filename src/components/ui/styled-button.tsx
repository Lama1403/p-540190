
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'max' | 'half';
  className?: string;
  isCompleted?: boolean;
}

export const StyledButton: React.FC<StyledButtonProps> = ({ 
  children, 
  variant = 'primary',
  className,
  isCompleted,
  ...props 
}) => {
  const baseStyles = {
    primary: cn(
      "relative transition-all duration-300 px-8",
      "bg-[#173C3F] border border-[#00D0C6] rounded-[127.434px]",
      "hover:border-transparent hover:shadow-[0_0_30px_rgba(0,208,198,0.15),0_0_15px_rgba(0,208,198,0.1),0_0_45px_rgba(14,165,233,0.15)]",
      "before:absolute before:inset-[1px] before:rounded-[127.434px] before:bg-[#173C3F] before:z-[1]",
      "after:absolute after:inset-0 after:rounded-[127.434px] after:bg-[length:300%_300%]",
      "after:bg-gradient-to-tr after:from-[#00D0C6] after:via-[#0FA0CE]/90 after:via-[#1EAEDB]/80 after:to-[#0EA5E9]",
      "after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-700 after:ease-in-out after:animate-[gradient_30s_cubic-bezier(0.4,0,0.2,1)_infinite]",
      isCompleted && "after:opacity-100 cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02] animate-fade-in"
    ),
    max: "w-[60.38px] h-[28.24px] bg-custom-accent rounded-[78.5256px] font-montserrat font-bold text-[10.3036px] leading-[120%] text-custom-accent2 capitalize transition-colors hover:bg-custom-primary hover:text-white active:bg-[#00b8af]",
    half: "w-[60.38px] h-[28.24px] bg-custom-secondary rounded-[78.5256px] font-montserrat font-bold text-[10.3036px] leading-[120%] text-custom-primary capitalize transition-colors hover:bg-custom-primary hover:text-white active:bg-[#00b8af]"
  };

  return (
    <Button 
      className={cn(baseStyles[variant], className)}
      {...props}
    >
      <span className="relative z-[2]">{children}</span>
    </Button>
  );
};

