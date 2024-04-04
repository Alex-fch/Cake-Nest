import styled from 'styled-components';
import LeftSide from './LeftSide';
import  RightSide from './RightSide'
import PropTypes from  'prop-types';
import {theme} from '../../src/assets/styles/theme'
import AdminButton from './AdminButton';

export default function NavBar({userName}) {

    return (
        <StyledNavBar>
            <LeftSide userName= {userName}/>
            <DivNavBar>
                <AdminButton/>
                <Spacer/>
                <RightSide userName= {userName}/>
            </DivNavBar>
        </StyledNavBar>
    )
}
NavBar.propTypes = {
    userName: PropTypes.string.isRequired
};

const StyledNavBar = styled.div`
    background-color: ${theme.colors.white};
    border-radius: 15px 15px 0 0;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DivNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Spacer = styled.div`
    width: 50px;
`
