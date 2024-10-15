import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeColors } from '../../../styles/theme';
import { StyledButton } from './Button.styled';

export interface ButtonProps {
  dataTestId?: string;
  rounded?: boolean;
  filled?: boolean;
  padding?: string;
  margin?: string;
  backgroungColor?: themeColors;
  hoverColor?: themeColors;
  color?: themeColors;
  children: React.ReactNode;
  width?: string;
  height?: string;
  onClick: (value?: string) => void;
}

export const Button: React.FC<ButtonProps> = ({
  dataTestId,
  rounded,
  filled,
  padding,
  margin,
  backgroungColor,
  hoverColor,
  color,
  children,
  width,
  height,
  onClick,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        data-testid={dataTestId}
        rounded={rounded}
        filled={filled}
        padding={padding}
        margin={margin}
        backgroungColor={backgroungColor}
        hoverColor={hoverColor}
        color={color}
        onClick={onClick}
        width={width}
        height={height}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};
