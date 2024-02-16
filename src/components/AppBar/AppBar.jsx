import { Navigation } from 'components/Navigation/Navigation';

import { useAuth } from 'hooks/useAuth';
import { Header, Wrapper, Logo } from './AppBar.styled';
import { Container } from 'components/Container/Container.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import logo from 'images/logo.png';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Wrapper>
          <Wrapper>
            <Logo to="/">
              <img src={logo} alt="logo" width={40} height={40} />
            </Logo>
            <Navigation />
          </Wrapper>
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Wrapper>
      </Container>
    </Header>
  );
};
