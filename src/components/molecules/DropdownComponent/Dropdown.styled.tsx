import styled from 'styled-components';

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
