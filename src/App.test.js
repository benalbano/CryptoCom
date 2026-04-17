// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoComDex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoComDex/i);
    expect(titleElement).toBeInTheDocument();
});
