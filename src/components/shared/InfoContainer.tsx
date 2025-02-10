
import React, { ReactNode } from 'react';

interface InfoContainerProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  mainText: string;
  secondaryText?: string;
  rightText?: string;
  centerIcon?: ReactNode;
}

export const InfoContainer: React.FC<InfoContainerProps> = ({
  leftIcon,
  rightIcon,
  mainText,
  secondaryText,
  rightText,
  centerIcon
}) => {
  return (
    <div className="flex flex-row justify-between items-center p-[17px] gap-[8px] w-full h-[64px] min-h-[48px] bg-[#1E1D1D]/80 backdrop-blur-lg shadow-2xl rounded-[15px]">
      <div className="flex flex-row items-center gap-[15px]">
        {leftIcon && (
          <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-[#2C9297]">
            {leftIcon}
          </div>
        )}
        <div className="flex flex-row items-center gap-[5px]">
          {secondaryText && (
            <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
              {secondaryText}
            </span>
          )}
          <span className="font-['Montserrat'] font-semibold text-[14.2665px] leading-[19px] tracking-[-0.02em] text-[#E1E2E2]">
            {mainText}
          </span>
        </div>
      </div>

      {centerIcon && (
        <div className="flex flex-col justify-center items-center gap-[6px] w-[14px] h-[54px]">
          {centerIcon}
        </div>
      )}

      {(rightText || rightIcon) && (
        <div className="flex flex-row items-center gap-[15px] ml-auto">
          {rightText && (
            <div className="flex flex-row items-center gap-[5px]">
              <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#C2C2C2]">
                Balance
              </span>
              <span className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-white">
                {rightText}
              </span>
            </div>
          )}
          {rightIcon && (
            <div className="flex flex-row justify-center items-center w-[30.04px] h-[30.04px] rounded-[45px] bg-black">
              {rightIcon}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
