import styled from 'styled-components';
import PropTypes from  'prop-types';

export default function PanelButton({onClick, label, Icon}) {
    
    return (
        <StyledPanelButton onClick={onClick} className='panelButton'>
            {Icon}
            {(label !== '') ?
            <span>{label}</span> : null
            }
        </StyledPanelButton>
    )
}
PanelButton.propTypes = {
    label: PropTypes.string.isRequired,
    Icon: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired
};
const StyledPanelButton = styled.button`
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.background};
    min-width: 50px;
    height: 40px;
    border-radius: 10px 10px 0 0;
    color: ${props => props.colortext};
    &:focus{
        background-color: black;
        color: white;
    }

    span {
        margin-left: 15px;
        margin-right: 15px;
        font-family: 'OpenSans', sans-serif;
    }
`