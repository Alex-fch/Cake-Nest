import styled from 'styled-components';
import { theme } from '../../src/assets/styles/theme';

export default function Main() {

    return (
        <StyledMain>
        </StyledMain>
    )
}
 
const StyledMain = styled.div`
    height: 500px;
    border-radius: 0 0 15px 15px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`