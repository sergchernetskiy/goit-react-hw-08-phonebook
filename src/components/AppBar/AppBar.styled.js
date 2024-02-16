import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: ${p => p.theme.space[3]}px 0px;

  border-bottom: ${p => p.theme.borders.boldLine};
  border-color: ${p => p.theme.colors.brown};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  margin-right: ${p => p.theme.space[5]}px;
`;
