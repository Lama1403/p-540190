
import React from 'react';

export const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div 
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        background: `
          linear-gradient(
            125deg,
            rgba(111, 51, 255, 0.4) -15%,
            rgba(111, 51, 255, 0.2) 0%,
            transparent 25%
          ),
          radial-gradient(
            circle at 100% 0%,
            rgba(0, 76, 84, 0.6) -20%,
            rgba(0, 76, 84, 0.3) 0%,
            rgba(0, 76, 84, 0.2) 30%,
            transparent 60%
          ),
          conic-gradient(
            from 315deg at 90% 10%,
            transparent -45deg,
            rgba(0, 92, 99, 0.4) 0deg,
            transparent 45deg
          ),
          radial-gradient(
            circle at 0% 0%,
            rgba(111, 51, 255, 0.2) 0%,
            rgba(111, 51, 255, 0.1) 20%,
            transparent 40%
          ),
          linear-gradient(
            135deg,
            rgb(0, 0, 0) 0%,
            rgba(0, 4, 8, 1) 30%,
            rgba(0, 6, 12, 1) 60%,
            rgba(0, 4, 8, 1) 80%,
            rgb(0, 0, 0) 100%
          )
        `,
        backgroundBlendMode: "screen, normal, soft-light, soft-light, normal",
      }}
    >
      {children}
    </div>
  );
};
