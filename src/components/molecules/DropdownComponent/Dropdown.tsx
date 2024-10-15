import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import {
  StyledDropdownItem,
  StyledDropdownContent,
  StyledDropdownContainer,
  StyledDiv,
} from './Dropdown.styled';
import { Label } from '../../atoms/LabelComponent/Label';
import { Button, ButtonProps } from '../../atoms/ButtonComponent/Button';

export interface DropdownSelectOptions {
  id: string;
  value: string;
}

export interface DropdownOptions extends ButtonProps {
  title?: string;
  label?: string;
  isOpen?: boolean;
  optionsHeight?: string;
  optionsWeight?: string;
  options: DropdownSelectOptions[];
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
          <Button
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
          >{`${optionSelected ? optionSelected : title} v`}</Button>
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
