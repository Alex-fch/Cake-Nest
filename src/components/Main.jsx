import styled from 'styled-components';
import { theme } from '../../src/assets/styles/theme';
import { fakeMenu } from '../utils/data/fakeMenu';
import Card from './Card';

export default function Main() {
    return (
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
    )
}
 
const StyledMain = styled.div`
    border-radius: 0 0 15px 15px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px 150px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);    
    grid-row-gap: 60px;
`