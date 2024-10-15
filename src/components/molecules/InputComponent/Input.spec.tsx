import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders Input component with correct label', () => {
    render(<Input label="Title" placeholder="Placeholder" />);
    const inputElement = screen.getByText(/Title/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the error message', () => {
    render(
      <Input
        label="Title"
        placeholder="Placeholder"
        errorMessage="Error"
        alert={true}
      />,
    );
    const errorElement = screen.getByText(/ERROR/i);
    expect(errorElement).toBeInTheDocument();
  });

  it('change the value', () => {
    const WrapperComponent = () => {
      const [value, setValue] = useState('Input');
      return (
        <Input
          label="Title"
          placeholder="Placeholder"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };
    render(<WrapperComponent />);
    const inputElement = screen.getByTestId('input-field');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(inputElement).toHaveValue('New Value');
  });
});
