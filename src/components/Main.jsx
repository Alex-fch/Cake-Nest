import styled from 'styled-components';
import { theme } from '../../src/assets/styles/theme';
import { fakeMenu } from '../utils/data/fakeMenu';
import Card from './Card';
import PanelAdmin from './PanelAdmin';
import { ThemeContext } from '../utils/context/Context';
import { useContext } from 'react';

export default function Main() {
    const { admin } = useContext(ThemeContext)

    return (
        <>
        <StyledMain>
            {fakeMenu.map((menu, index) => (
                <Card
                    key={`${menu.id}-${index}`}
                    imageSource={menu.imageSource}
                    title={menu.title}
                    price={menu.price}
                />
            ))}
        </StyledMain>
        {
            admin ? <PanelAdmin/> : null
        }
        </>
    )
}
 
const StyledMain = styled.div`
    margin: 0 30px 30px 30px;
    border-radius: 0 0 15px 15px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);    
    grid-row-gap: 60px;
    overflow-y: auto;
    /* Rendre la barre de défilement invisible */
    ::-webkit-scrollbar {
        display: none; /* Pour les navigateurs WebKit */
    }
    /* Rendre la barre de défilement invisible pour Firefox */
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
`