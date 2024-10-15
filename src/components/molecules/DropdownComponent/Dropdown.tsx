import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeColors } from '../../../styles/theme';
import {
  StyledDropdownItem,
  StyledDropdownContent,
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDiv,
} from './Dropdown.styled';
import { Label } from '../../atoms/LabelComponent/Label';

export interface DropdownSelectOptions {
  id: string;
  value: string;
}

export interface DropdownButtonProps {
  rounded?: boolean;
  filled?: boolean;
  padding?: string;
  margin?: string;
  backgroungColor?: themeColors;
  hoverColor?: themeColors;
  color?: themeColors;
  width?: string;
  height?: string;
}

export interface DropdownOptions extends DropdownButtonProps {
  title?: string;
  label?: string;
  isOpen?: boolean;
  optionsHeight?: string;
  optionsWeight?: string;
  options: DropdownSelectOptions[];
  onClick: (value: string) => void;
}

export const Dropdown: React.FC<DropdownOptions> = ({
  title,
  label,
  isOpen,
  rounded,
  filled,
  padding,
  margin,
  backgroungColor,
  hoverColor,
  color,
  width,
  height,
  options,
  onClick,
}) => {
  const [open, setOpen] = useState(isOpen);
  const [optionSelected, setOptionSelected] = useState('');

  const onClickOption = (value: string) => {
    onClick(value);
    setOpen(false);
    setOptionSelected(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        {label && <Label>{label}</Label>}
        <StyledDropdownContainer>
          <StyledDropdownButton
            data-testid={`dropdown-button-${title}`}
            onClick={() => setOpen(!open)}
            rounded={rounded}
            filled={filled}
            padding={padding}
            margin={margin}
            backgroungColor={backgroungColor}
            hoverColor={hoverColor}
            color={color}
            width={width}
            height={height}
          >{`${optionSelected ? optionSelected : title} v`}</StyledDropdownButton>
          <StyledDropdownContent showcontent={open}>
            {options.map((option) => (
              <StyledDropdownItem
                key={`item-${option.id}`}
                data-testid={`item-${option.id}`}
                onClick={() => onClickOption(option.value)}
              >
                {option.value}
              </StyledDropdownItem>
            ))}
          </StyledDropdownContent>
        </StyledDropdownContainer>
      </StyledDiv>
    </ThemeProvider>
  );
};
