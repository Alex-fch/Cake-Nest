import styled from 'styled-components';
import { theme } from '../../src/assets/styles/theme';
import PropTypes from  'prop-types';

export default function InputTextPanel({ value, onChange, Icon, ...restProps }) {
    return (
        <InputStyled>
            {Icon && Icon}
            <input value={value} onChange={onChange} type="text" {...restProps}/>
        </InputStyled>
    );
}

InputTextPanel.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    Icon: PropTypes.element.isRequired
}

const InputStyled = styled.div`
        width: 450px;
        background-color: ${theme.colors.background_white};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${theme.borderRadius.round};
        margin: 18px 0;
        padding: 18px 24px;
        white-space: nowrap;

    .icon {
        color: ${theme.colors.greySemiDark};
        margin: 0 8px;
        font-size: ${theme.fonts.size.P0};
        min-width: 1em;
    }
    
    input {
        border: none;
        font-size: ${theme.fonts.size.P0};
        box-sizing: border-box;
        width: calc(100%);
        display: flex;
        color: ${theme.colors.dark};
        background-color: ${theme.colors.background_white};
        &::placeholder {
            background-color: ${theme.colors.background_white};
            color: ${theme.colors.greyMedium};
        }
        &:focus {
            outline: none;
        }
    }

`;