import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Bar from './';

describe("Bar", () => {
  it("Renders '25%' when 25 is passed in", () => {
    render(<Bar value={25}/>)
    expect(screen.getByRole('label')).toHaveTextContent("25%");
  });

  it("Styles itself to width: 25%' when 25 is passed in", () => {
    render(<Bar value={25}/>)
    expect(screen.getByRole('progressbar')).toHaveStyle("width: 25%");
  });

  it("Renders '100%' when 100 is passed in", () => {
    render(<Bar value={100}/>)
    expect(screen.getByRole('label')).toHaveTextContent("100%");
  });

  it("Styles itself to width: 100%' when 100 is passed in", () => {
    render(<Bar value={100}/>)
    expect(screen.getByRole('progressbar')).toHaveStyle("width: 100%");
  });

  it("Renders '101%' when 101 is passed in", () => {
    render(<Bar value={101}/>)
    expect(screen.getByRole('label')).toHaveTextContent("101%");
  });

  it("Styles itself to width: 100%' when 101 is passed in", () => {
    render(<Bar value={101}/>)
    expect(screen.getByRole('progressbar')).toHaveStyle("width: 100%");
  });

  it("Renders '101%' when 101 is passed in", () => {
    render(<Bar value={101}/>)
    expect(screen.getByRole('label')).toHaveTextContent("101%");
  });

  it("Styles itself to width: 100%' when 101 is passed in", () => {
    render(<Bar value={101}/>)
    expect(screen.getByRole('progressbar')).toHaveStyle("width: 100%");
  });

  it("Background color is red when 101 is passed in", () => {
    render(<Bar value={101}/>)
    expect(screen.getByRole('progressbar')).toHaveStyle("background-color: red");
  });

})