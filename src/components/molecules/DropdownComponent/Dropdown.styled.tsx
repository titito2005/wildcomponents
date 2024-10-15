import styled from 'styled-components';
import { DropdownButtonProps } from './Dropdown';

interface DropdownContentProps {
  showcontent?: boolean;
}

export const StyledDropdownContainer = styled.div`
  font-family:
    Trebuchet MS,
    sans-serif;
  display: inline-block;
  position: relative;
`;

export const StyledDropdownButton = styled.button<DropdownButtonProps>`
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
    text-transform: uppercase;
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

export const StyledDropdownContent = styled.div<DropdownContentProps>`
  ${({ showcontent }) => `
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    min-width: 160px;
    border-radius: 4px;
    z-index: 1;

    display: ${showcontent ? 'block' : 'hidden'};
  `}
`;

export const StyledDropdownItem = styled.div`
  color: black;
  font-family:
    Trebuchet MS,
    sans-serif;
  padding: 12px 16px;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
