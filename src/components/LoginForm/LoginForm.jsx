import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {
  FormField,
  Label,
  Input,
  Button,
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleLogin = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const clearInputValue = email === '' || password === '';

  return (
    <FormField onSubmit={handleLogin}>
      <Label htmlFor="emailId">
        Email
        <Input
          id="emailId"
          type="email"
          name="email"
          value={email}
          required
          placeholder="email"
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="passwordId">
        Password
        <Input
          id="passwordId"
          type="password"
          name="password"
          value={password}
          required
          placeholder="password"
          onChange={handleChange}
        />
      </Label>

      <Button type="submit" disabled={clearInputValue || isLoading}>
        Login
      </Button>
    </FormField>
  );
};
