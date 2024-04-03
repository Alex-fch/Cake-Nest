import styled from "styled-components";
import PropTypes from  'prop-types';

export default function PrimaryButton({ label, Icon }) {
    return (
        <PrimaryButtonStyled className="buttonContainer">
            <span>{label}</span>
            {Icon && Icon}
        </PrimaryButtonStyled>
    );
}

PrimaryButton.propTypes = {
    label: PropTypes.string,
    Icon: PropTypes.string
}

const PrimaryButtonStyled = styled.button`
    background: #63a5aa;
    border: 1px solid #63a5aa;
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
