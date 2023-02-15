import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Verificando se existe o campo Email', () => {
  render(<App />);
  const button = screen.getByLabelText("Email");

  expect(button).toBeInTheDocument();
  expect(button.type).toBe('email');
});

test('Verificando se existe o botão "Enviar" e o botão "Voltar"', () => {
  render(<App />);
  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});

test('Verificando se existe o botão "Enviar" pelo seu id', () => {
  render(<App />);
  const btn = screen.getByTestId("id-send");

  expect(btn).toHaveValue("Enviar");
});

test('Verificando comportamento do campo email, e do botão', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  const button = screen.getByTestId("id-send");
  const inputSaveEmail = screen.getByTestId('id-email-user')

  userEvent.type(inputEmail, "teste@teste.com");
  userEvent.click(button);

  
  expect(inputEmail).toHaveValue('');
  expect(inputSaveEmail).toHaveTextContent('Valor: teste@teste.com');
});