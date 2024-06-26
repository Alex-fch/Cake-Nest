import styled from 'styled-components';
import { theme } from '../../src/assets/styles/theme';

export default function Logo() {
  return (
    <StyledLogo>
        <h1>CAKE</h1>
        <img src='../../src/assets/images/cupcake.png' alt="Logo cupcake"/>
        <h1>NEST</h1>
    </StyledLogo>
  );
}

  const StyledLogo = styled.div`
    display: flex;
    align-items: center;

    h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "OpenSans", sans-serif;
    }

    img {
    object-fit: cover;
    object-position: center;
    height: 60px;
    margin: 0 5px;
    }
  `