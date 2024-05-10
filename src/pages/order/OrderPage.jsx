import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Main from  '../../components/Main';
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';

export default function OrderPage() {
    const { name } = useParams();

    return (
        <StyledOrderPage>
            <NavBar userName= {name} className="navbar"/>
            <Main className="main"/>
        </StyledOrderPage>
    )
}
 
const StyledOrderPage = styled.div`
    position: relative;
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    flex-direction: column;
`