import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App root", () => {
  it("Should render the component", () => {
    render(<App />);
  });
});