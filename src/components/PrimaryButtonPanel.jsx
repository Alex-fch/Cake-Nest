import styled from "styled-components";
import PropTypes from  'prop-types';
import { theme } from "../assets/styles/theme";

export default function PrimaryButtonPanel({ label }) {
    return (
        <PrimaryButtonStyled className="buttonContainer">
            <span>{label}</span>
        </PrimaryButtonStyled>
    );
}

PrimaryButtonPanel.propTypes = {
    label: PropTypes.string,
}

const PrimaryButtonStyled = styled.button`
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    border-radius: 5px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    padding: 16px 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    line-height: 1;
    text-align: center;
`;
