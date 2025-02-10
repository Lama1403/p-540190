import React from 'react';

interface SwapHeaderProps {
  title: string;
  description: string;
}

export const SwapHeader: React.FC<SwapHeaderProps> = ({ title, description }) => {
  return (
    <header className="mb-6">
      <div className="mb-2">
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      </div>
      <div className="text-muted-foreground">
        <p>{description}</p>
      </div>
    </header>
  );
};