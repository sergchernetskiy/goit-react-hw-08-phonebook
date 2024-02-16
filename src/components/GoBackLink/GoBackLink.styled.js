import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[0]}px;

  font-family: ${p => p.theme.fonts.body};

  color: ${p => p.theme.colors.accent};

  transition: color 250ms;

  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }

  text-decoration: none;
`;
