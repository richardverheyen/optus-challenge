import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe("App", () => {
  it("Renders hello world", () => {
    render(<App />);
    expect(screen.getByRole('heading', {
      level: 1
    })).toHaveTextContent('Progress Bars Demo');
  })
})