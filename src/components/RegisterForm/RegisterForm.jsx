import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { FormField, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSignUp = e => {
    e.preventDefault();

    dispatch(
      signUp({
        name,
        email,
        password,
      })
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const clearInputValue = name === '' || email === '' || password === '';

  return (
    <FormField onSubmit={handleSignUp}>
      <Label htmlFor="nameId">
        Username
        <Input
          id="nameId"
          type="text"
          name="name"
          value={name}
          required
          placeholder="username"
          onChange={handleChange}
        />
      </Label>

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
        Sign Up
      </Button>
    </FormField>
  );
};
