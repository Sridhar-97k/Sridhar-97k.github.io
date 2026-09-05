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

test('project links open externally with a safe rel', () => {
  render(<App />);
  const source = screen.getByRole('link', { name: /source/i });
  expect(source).toHaveAttribute(
    'href',
    'https://github.com/Sridhar-97k/emergency-resource-locator'
  );
  const demo = screen.getByRole('link', { name: /live demo/i });
  expect(demo).toHaveAttribute('href', 'https://emergency-resource-locator-two.vercel.app');
  [source, demo].forEach((link) => {
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
