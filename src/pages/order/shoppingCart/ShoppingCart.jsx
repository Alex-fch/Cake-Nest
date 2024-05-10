import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';

export default function ShoppingCart() {

    return (
        <ShoppingCartStyled>
            <div>
                <span>Total</span>
                <span>0,00 €</span>
            </div>

        </ShoppingCartStyled>
    )
}
 
const ShoppingCartStyled = styled.div`
    width: 600px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    div {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-between;
        background-color: ${theme.colors.dark};
        padding: 8px 8px 8px 8px;
        span {
            color: ${theme.colors.primary};
            font-size: ${theme.fonts.size.P3};
            font-family: "Pacifico", sans-serif;
        }
    }
`