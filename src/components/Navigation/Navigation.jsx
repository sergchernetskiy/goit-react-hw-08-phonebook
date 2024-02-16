import { Wrapper, LinkMenu } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Wrapper>
      <LinkMenu to="/">Home</LinkMenu>
      <LinkMenu to="contacts">Contacts</LinkMenu>
    </Wrapper>
  );
};
