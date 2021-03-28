import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('find world in document', () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByText(/world/i);
  expect(worldElement).toBeInTheDocument();
});

test('find username placeholder input', () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByPlaceholderText(/username/i);
  expect(worldElement).toBeInTheDocument();
});
