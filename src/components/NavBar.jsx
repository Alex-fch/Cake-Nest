import styled from 'styled-components';
import LeftSide from './LeftSide';
import  RightSide from './RightSide'
import PropTypes from  'prop-types';
import {theme} from '../../src/assets/styles/theme'

export default function NavBar({userName}) {

    return (
        <StyledNavBar>
            <LeftSide userName= {userName}/>
            <RightSide userName= {userName}/>
        </StyledNavBar>
    )
}
NavBar.propTypes = {
    userName: PropTypes.string.isRequired
};

const StyledNavBar = styled.div`
    margin: 30px 30px 0 30px;
    background-color: ${theme.colors.white};
    border-radius: 15px 15px 0 0;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
