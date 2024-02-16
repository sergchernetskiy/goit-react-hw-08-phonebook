import styled from 'styled-components';

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px;
  width: 308px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.brown};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.purple};
  cursor: pointer;
  &:focus-within {
    color: ${p => p.theme.colors.aqua};
  }
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[2]}px;
  width: 300px;
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: ${p => p.theme.colors.soft};

  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.aqua};
    border-radius: ${p => p.theme.radii.normal};
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[2]}px;
  width: 50%;
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  background: ${p => p.theme.colors.soft};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: color 250ms, background-color 250ms;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.aqua};
  }
  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.aqua};
    border-radius: ${p => p.theme.radii.normal};
  }
`;
