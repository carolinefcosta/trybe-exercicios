// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Verificando fetch a Joke', () => {
  afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
})

describe('Verificando funcionalidade do nosso botão', () => {
  it('fetches a new joke when button is clicked', async () => {
    const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    const joke2 = {
      id: 'xXSv492wPmb',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke1),
    });
    
    render(<App />);
    const button = screen.getByRole('button', { name: 'New Joke' });
  
    expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
    });

    userEvent.click(button);

    expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
    expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(2);
  });
})
