import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name in the header', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /sridhar kumar/i, level: 1 })).toBeInTheDocument();
});

test('renders every top-level section', () => {
  render(<App />);
  const sections = [
    /about me/i,
    /education/i,
    /work experience/i,
    /technical skills/i,
    /featured projects/i,
    /publications/i,
    /connect/i
  ];
  sections.forEach((section) => {
    expect(screen.getByRole('heading', { name: section, level: 2 })).toBeInTheDocument();
  });
});
