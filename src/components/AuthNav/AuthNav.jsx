import { Wrapper, LinkAuth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <LinkAuth to="register">Sign Up</LinkAuth>
      <LinkAuth to="login">LogIn</LinkAuth>
    </Wrapper>
  );
};
