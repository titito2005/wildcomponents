import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockedOptions = [
    { id: '1', value: 'Option#1' },
    { id: '2', value: 'Option#2' },
  ];

  const testTitle = 'test-dropdown';

  it('renders Dropdown component with correct label', () => {
    render(
      <Dropdown
        title={testTitle}
        options={mockedOptions}
        onClick={mockOnClick}
      >
        {testTitle}
      </Dropdown>,
    );
    screen.debug(undefined, Infinity);
    const dropDownButton = screen.getByTestId('dropdown-button-test-dropdown');
    expect(dropDownButton).toBeInTheDocument();
    fireEvent.click(dropDownButton);
    const firstOptionElement = screen.getByTestId('item-1');
    const lastOptionElement = screen.getByTestId('item-2');
    expect(firstOptionElement).toBeInTheDocument();
    expect(lastOptionElement).toBeInTheDocument();
  });

  it('should click option', () => {
    render(
      <Dropdown
        title={testTitle}
        options={mockedOptions}
        onClick={mockOnClick}
      >
        {testTitle}
      </Dropdown>,
    );
    const dropDownButton = screen.getByTestId('dropdown-button-test-dropdown');
    fireEvent.click(dropDownButton);
    const firstOptionElement = screen.getByTestId('item-1');
    fireEvent.click(firstOptionElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render label', () => {
    render(
      <Dropdown
        title={testTitle}
        label={'dropdown-label'}
        options={mockedOptions}
        onClick={mockOnClick}
      >
        {testTitle}
      </Dropdown>,
    );
    const dropdownLabel = screen.getByText('dropdown-label');
    expect(dropdownLabel).toBeInTheDocument();
  });
});
