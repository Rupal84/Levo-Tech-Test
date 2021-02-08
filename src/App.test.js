import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders component successfully', () => {
    const {container} = render(<App />);  
    expect(container).toMatchSnapshot();
  });
  
  test('Click Read more button and display more cards', () => {
    const {getByTestId, getAllByTestId} = render(<App />);  
    const btn = getByTestId('read-more');
    fireEvent.click(btn);
    expect(getAllByTestId('card')).toHaveLength(6);
  });
})

