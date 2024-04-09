import { render, screen } from '@testing-library/react';

import App from '../src/components/App';

describe("App.js", () => {
  it('renders the Trekbag app', () => {
    render(<App />);

    expect(screen.getByRole('heading', {name: 'Trekbag'})).toBeVisible();
    expect(screen.getByRole('main')).toBeVisible();
    expect(screen.getByRole('contentinfo')).toBeVisible();
  });
});
