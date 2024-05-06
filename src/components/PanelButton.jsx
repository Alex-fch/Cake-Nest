import styled from 'styled-components';
import PropTypes from  'prop-types';

export default function PanelButton({onClick, background, text, colortext, size, Icon}) {
    
    return (
        <StyledPanelButton
            onClick={onClick}
            background={background} 
            colortext={colortext} 
            size={size}>
            {Icon}
            <span>{text}</span>
        </StyledPanelButton>
    )
}
PanelButton.propTypes = {
    text: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    colortext: PropTypes.string.isRequired,
    Icon: PropTypes.element.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
const StyledPanelButton = styled.button`
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.background};
    width: ${props => props.size};
    height: 40px;
    border-radius: 10px 10px 0 0;
    color: ${props => props.colortext};
    &:focus{
        background-color: black;
        color: white;
    }

    span {
        margin-left: 15px;
        font-family: 'OpenSans', sans-serif;
    }
`