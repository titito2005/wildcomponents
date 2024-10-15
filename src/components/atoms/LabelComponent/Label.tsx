import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { StyledLabel } from './Label.styled';

export interface LabelProps {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLabel>{children}</StyledLabel>
    </ThemeProvider>
  );
};
