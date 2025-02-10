
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StyledCardProps extends React.ComponentProps<typeof Card> {
  contentClassName?: string;
}

export const StyledCard: React.FC<StyledCardProps> = ({ 
  children, 
  className,
  contentClassName,
  ...props 
}) => {
  return (
    <Card 
      className={cn(
        "w-full max-w-[474.86px] bg-[rgba(30,29,29,0.5)] shadow-lg rounded-[15px] p-[35px] border-0",
        className
      )}
      {...props}
    >
      <CardContent 
        className={cn(
          "p-0 flex flex-col items-center gap-[17px] w-full max-w-[404.86px]",
          contentClassName
        )}
      >
        {children}
      </CardContent>
    </Card>
  );
};
