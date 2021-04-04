import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './components/NavigationBar';

test('renders learn react link', () => {
  render(<NavigationBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
