import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const textFadeAnimation = keyframes`
    0% {
        opacity: 1;
    }
    20% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export default function AdminButton() {
    const [isAdminMode, setIsAdminMode] = useState(false);

    const handleClick = () => {
        setIsAdminMode(!isAdminMode);
        if (!isAdminMode) {
            toast.info("Mode admin actif", {
                style: { backgroundColor: 'black',
                        color: 'white',
                        fontWeight: 500 }, // Change le fond de ce toast
              });
        }

    }

    return (
        <>
        <StyledAdminButton isAdminMode={isAdminMode} onClick={handleClick}>
            <span>{isAdminMode ? "DESACTIVER LE MODE ADMIN" : "ACTIVER LE MODE ADMIN"}</span>
            <div></div>
        </StyledAdminButton>
        <ToastContainer position="bottom-right"/>
        </>
    )
}

const StyledAdminButton = styled.div`
    cursor: grab;
    position: relative; 
    display: flex;
    align-items: center;
    width: 250px;
    height: 45px;
    border: 4px solid ${({ isAdminMode }) => isAdminMode ? theme.colors.primary : 'black'};
    border-radius: 10% / 50%;
    background-color: ${({ isAdminMode }) => isAdminMode ? 'white' : theme.colors.dark};
    transition: background-color 1s ease, 
                border 1s ease;

    span {
        color: ${theme.colors.primary};
        margin: ${({ isAdminMode }) => isAdminMode ? '0 0 0 10px' : '0 0 0 55px'};
        font-size: ${({ isAdminMode }) => isAdminMode ? '13px' : '14px'};
        position: relative; 
        z-index: 1;
        transition: margin 1s ease;
        ${({ isAdminMode }) =>
            isAdminMode &&
            css`
                animation: ${textFadeAnimation} 1.1s ease; /* Utilisation de l'animation définie */
                animation-direction: alternate;
                animation-fill-mode: forwards;
            `}
    }

    div {
        position: absolute; 
        background-color: ${theme.colors.primary};
        border-radius: 50%;
        height: 40px;
        width: 40px;
        margin-left: 4px;
        margin-right: 4px;
        transition: margin-left 1s ease; 
        ${(props) => props.isAdminMode && `
            margin-left: calc(100% - 45px); /* Déplacement de la div vers la droite */
        `}
    }
`
