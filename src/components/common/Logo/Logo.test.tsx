import {
  render,
  screen,
} from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('renders a logo', () => {
    render(<Logo />);

    const heading = screen.getByText('SomoTracker');

    expect(heading).toBeTruthy;
  })
});