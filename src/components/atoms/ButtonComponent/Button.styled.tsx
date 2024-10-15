import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  ${({
    rounded,
    filled,
    padding = '15px',
    margin,
    backgroungColor = '600',
    hoverColor = '800',
    color = 'white',
    width = '200px',
    height,
    theme,
  }) => `
    font-family: Trebuchet MS, sans-serif;
    background: ${
      filled
        ? `linear-gradient(45deg, ${theme.colors[backgroungColor]}, ${theme.colors[hoverColor]})`
        : 'transparent'
    };
    border: 2px solid ${theme.colors[backgroungColor]};
    border-radius: ${rounded ? '10px' : '0px'};
    padding: ${padding || '10px'};
    color: ${filled ? color : theme.colors[backgroungColor]};
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin: ${margin};
    width: ${width};
    height: ${height};

    &:hover {
      background: ${
        filled
          ? `linear-gradient(45deg, ${theme.colors[hoverColor]}, ${theme.colors[backgroungColor]})`
          : 'transparent'
      };
      color: ${filled ? 'white' : theme.colors[hoverColor]};
      border: 2px solid ${theme.colors[hoverColor]};
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    }
  `}
`;
