import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ButtonContext } from '../utils/context/Context';

export default function PanelDetail({ isopen }) {
    const { textButton } = useContext(ButtonContext)
    return (
        <StyledPanelDetail isopen={isopen}>
            <span>{ textButton }</span>
        </StyledPanelDetail>
    )
}

PanelDetail.propTypes = {
    isopen: PropTypes.bool.isRequired,
};

const StyledPanelDetail = styled.div`
    width: 100%;
    height: ${({ isopen }) => isopen ? '400px' : '0px'};
    background-color: white;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px -8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    transition: height 1s ease; /* Ajout de la transition */
    span {
        margin-top: 10px;
        margin-left: 10px;
        ${({ isopen }) => isopen ? 'null' : 'display: none'};
        transition: display 1s ease; /* Ajout de la transition */
    }
`;
