import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe("App", () => {
  it("Renders the title in a h1", () => {
    render(<App />);
    expect(screen.getByRole('heading', {
      level: 1
    })).toHaveTextContent('Progress Bars Demo');
  });

  it("Bar values cannot go under 0", () => {
    render(<App />);

    const minus25Button = screen.getByTestId('minus-25');

    expect(screen.getAllByRole('label')[0]).toHaveTextContent("25%");
    fireEvent.click(minus25Button);
    expect(screen.getAllByRole('label')[0]).toHaveTextContent("0%");
    fireEvent.click(minus25Button);
    expect(screen.getAllByRole('label')[0]).toHaveTextContent("0%");
  });

  it("Bar values can go over 100", () => {
    render(<App />);

    const plus25Button = screen.getByTestId('plus-25');

    expect(screen.getAllByRole('label')[0]).toHaveTextContent("25%");
    fireEvent.click(plus25Button);
    expect(screen.getAllByRole('label')[0]).toHaveTextContent("50%");
    fireEvent.click(plus25Button);
    expect(screen.getAllByRole('label')[0]).toHaveTextContent("75%");
    fireEvent.click(plus25Button);
    expect(screen.getAllByRole('label')[0]).toHaveTextContent("100%");
    fireEvent.click(plus25Button);
    expect(screen.getAllByRole('label')[0]).toHaveTextContent("125%");
  });

  it("Bar values over 100 change to red", () => {
    render(<App />);

    const plus25Button = screen.getByTestId('plus-25');

    fireEvent.click(plus25Button);
    fireEvent.click(plus25Button);
    fireEvent.click(plus25Button);
    fireEvent.click(plus25Button);
    expect(screen.getAllByRole('progressbar')[0]).toHaveStyle("background-color: red");
  });
})