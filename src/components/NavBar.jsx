import styled from 'styled-components';
import LeftSide from './LeftSide';
import  RightSide from './RightSide'
import PropTypes from  'prop-types';
import {theme} from '../../src/assets/styles/theme'

export default function NavBar(props) {

    return (
        <StyledNavBar>
            <LeftSide userName= {props.userName}/>
            <RightSide userName= {props.userName}/>
        </StyledNavBar>
    )
}
NavBar.propTypes = {
    userName: PropTypes.string
};

const StyledNavBar = styled.div`
    background-color: ${theme.colors.white};
    border-radius: 15px 15px 0 0;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
