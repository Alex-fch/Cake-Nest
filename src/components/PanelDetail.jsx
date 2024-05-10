import styled from 'styled-components';
import PanelAdminForm from './PanelAdminForm';
import { theme } from '../assets/styles/theme';
import { HiCursorClick } from "react-icons/hi";
import { useContext } from 'react';
import { ProductContext } from '../utils/context/Context';

export default function PanelDetail() {
    const { isopen, label, product } = useContext(ProductContext);
    return (
        <StyledPanelDetail open={isopen}>
            {(label === "Ajouter un produit" || label === "" || product !== null ) ? 
            <PanelAdminForm/> : <span className='text'>Cliquez sur un produit pour le modifier <HiCursorClick/></span>
            }
        </StyledPanelDetail>
    )
}

const StyledPanelDetail = styled.div`
    width: 100%;
    height: ${({ open }) =>  open ? '400px' : '0px'};
    background-color: white;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px -8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    transition: height 1s ease; /* Ajout de la transition */
    display: ${({ open }) => open ? 'block' : 'none'};
    transition: display 2s ease; /* Ajout de la transition */

    .text {
        margin-left: 50px;
        font-family: "Pacifico", sans-serif;
        color: ${theme.colors.greyDark};
        font-size: ${theme.fonts.size.P3};
    }
`;
