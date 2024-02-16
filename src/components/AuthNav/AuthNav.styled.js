import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const LinkAuth = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.accent};
  text-decoration: none;

  transition: color 250ms, background-color 250ms;

  &:hover,
  &:focus {
    color: #fff;
    background-image: linear-gradient(to right, #fff, #0083b0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
