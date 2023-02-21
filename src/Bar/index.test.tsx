import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Bar from './';

describe("Bar", () => {
  it("Renders '25%' when 25 is passed in", () => {
    // Arrange
    render(<Bar value={25}/>)
    // Act

    // Expect
    expect(screen.getByRole('progressbar')).toHaveTextContent("25%");
  });

  it("Styles itself to width: 25%' when 25 is passed in", () => {
    // Arrange
    render(<Bar value={25}/>)
    // Act

    // Expect
    expect(screen.getByRole('progressbar')).toHaveStyle("width: 25%");
  })

})