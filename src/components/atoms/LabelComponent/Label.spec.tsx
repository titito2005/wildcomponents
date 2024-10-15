import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
  it('renders Label component', () => {
    render(<Label> Label </Label>);
    const labelText = screen.getByText('Label');
    expect(labelText).toBeInTheDocument();
  });
});
