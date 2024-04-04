import { Link } from "react-router-dom";
import Logo from  "../../src/components/Logo";
import PropTypes from  'prop-types';
import styled from "styled-components";

export default function LeftSide({userName}) {

    return (
        <StyledLeftSide>
            <Link to={`/order/${userName}`} className="link">
                <Logo/>
            </Link>
        </StyledLeftSide>
    )
}

const StyledLeftSide = styled.div`
    .link {
        text-decoration: none;
    }
`
LeftSide.propTypes = {
    userName: PropTypes.isRequired
};