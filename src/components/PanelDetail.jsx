import styled from 'styled-components';
import PropTypes from 'prop-types';
import PanelAdminForm from './PanelAdminForm';

export default function PanelDetail({ isopen }) {
    return (
        <StyledPanelDetail open={isopen}>
            <PanelAdminForm/>
        </StyledPanelDetail>
    )
}

PanelDetail.propTypes = {
    isopen: PropTypes.bool.isRequired
};

const StyledPanelDetail = styled.div`
    width: 100%;
    height: ${({ open }) =>  open ? '400px' : '0px'};
    background-color: white;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px -8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    transition: height 1s ease; /* Ajout de la transition */
    display: ${({ open }) => open ? 'block' : 'none'};
    transition: display 2s ease; /* Ajout de la transition */
`;
