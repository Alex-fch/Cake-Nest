import styled from 'styled-components';
import { theme } from '../../src/assets/styles/theme';
import Card from './Card';
import PanelAdmin from './PanelAdmin';
import { FakeMenuContext, ThemeContext } from '../utils/context/Context';
import { useContext } from 'react';
import ShoppingCart from '../pages/order/shoppingCart/ShoppingCart';

export default function Main() {
    const { fakeMenuTable } = useContext(FakeMenuContext);
    const { admin } = useContext(ThemeContext);

    const table = fakeMenuTable.slice().reverse()

    return (
        <>
            <StyledMain>
                <ShoppingCart/>
                {table.length > 0 ? (
                    <div className='dispositionCard'>
                        {table.map((menu, index) => (
                            <Card
                                key={`${menu.id}-${index}`}
                                id={menu.id}
                                imageSource={menu.imageSource}
                                title={menu.title}
                                price={menu.price}
                            />
                        ))}
                    </div>
                ) : (
                    admin ? <span className='message'>Il n&apos;y a plus de produits disponibles. <br/> Cliquez ci-dessous pour les réinitialiser. </span> : 
                    <span className='message'>Victime de notre succès. <br/> De nouvelles recettes sont en préparation, revenez vite !</span>
                )}
            </StyledMain>
            {admin ? <PanelAdmin/> : null}
        </>
    )
}
 
const StyledMain = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 30px 30px 30px;
    border-radius: 0 0 15px 15px;
    background-color: ${theme.colors.white};
    height: calc(100vh - 194px);
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    .message {
        width: 100%;
        font-family: "Pacifico", sans-serif;
        color: ${theme.colors.greyDark};
        font-size: ${theme.fonts.size.P4};
    }

    .dispositionCard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);    
        grid-row-gap: 60px;
        padding: 50px 50px;
        overflow-y: auto;
        /* Rendre la barre de défilement invisible */
        ::-webkit-scrollbar {
            display: none; /* Pour les navigateurs WebKit */
        }
        /* Rendre la barre de défilement invisible pour Firefox */
        scrollbar-width: none;
        scrollbar-color: transparent transparent;
    }
`