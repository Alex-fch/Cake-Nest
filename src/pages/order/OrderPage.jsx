import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Main from  '../../components/Main';
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';

export default function OrderPage() {
    const { name } = useParams();

    return (
        <StyledOrderPage>
            <NavBar userName= {name} />
            <Main />
        </StyledOrderPage>
    )
}
 
const StyledOrderPage = styled.div`
    background: ${theme.colors.primary};
    background-size: cover;
    background-blend-mode: darken;
    padding: 30px 35px 30px 35px;
`