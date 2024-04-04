import PropTypes from  'prop-types';
import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import Profile from "./Profile";

export default function LeftSide({userName}) {

    return (
        <StyledRightSide>
            <Profile userName= {userName} />
        </StyledRightSide>
    )
}

const StyledRightSide = styled.div`
    font-family: 'OpenSans', sans-serif;
    font-size: ${theme.fonts.size.P2};
`
LeftSide.propTypes = {
    userName: PropTypes.string.isRequired
};