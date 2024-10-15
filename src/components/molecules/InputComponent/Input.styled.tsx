import styled from 'styled-components';
import { InputProps } from './Input';

export const StyledInput = styled.input<InputProps>`
  ${({
    width = '150px',
    height = '30px',
    fontFamily = 'Trebuchet MS, sans-serif',
    alert,
    theme,
  }) => `
    outline: none !important;
    font-family: ${fontFamily};
    width: ${width};
    border: none;
    background-color: ${theme.colors.lightGrey};
    width: ${width};
    height: ${height};
    border-radius: 5px;
    margin-bottom: 18px;
    padding-left: 10px;

    &::placeholder {
      color: black;
      opacity: 0.4;
    }
    
    ${alert ? `margin-bottom: 0px; padding: 0px; padding-left: 9px; border: 0.1px solid ${theme.colors.alert};` : ''}

    &:focus {
      ${
        alert
          ? ``
          : `padding: 0px; padding-left: 9px; border: 0.1px solid ${theme.colors.light};`
      }
    }
  `}
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledErrorParagraph = styled.p`
  margin: 3px 0 0 4px;
  padding: 0;
  text-transform: uppercase;
  font-family:
    Trebuchet MS,
    sans-serif;
  color: #d5401f;
  font-weight: bold;
  font-size: 13px;
`;
