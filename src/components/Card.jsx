import PropTypes from  'prop-types';
import styled from "styled-components";
import PrimaryButton from './PrimaryButton';
import { theme } from '../assets/styles/theme';
import { formatMontant } from '../utils/maths';

export default function Card({imageSource, title, price}) {

    return (
        <StyledCard>
            <img src={imageSource} alt="ImageSource" />
            <span className='title'>{title}</span>
            <div>
                <span className='price'>{formatMontant(price)} €</span>
                <div className='button'>
                    <PrimaryButton label="Ajouter" Icon=""/>
                </div>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: 15px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 30px 20px 30px 20px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img {
        width: 85%;
        margin: 15px auto 15px auto;
    }
    .title {
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: ${theme.fonts.size.P3};
        font-family: "Pacifico", sans-serif;
        font-weight: 500;
    }
    .price {
        font-family: 'OpenSans', sans-serif;
        color: ${theme.colors.primary};
        flex: 1;
    }
    .button {
        flex: 1;
    }

`
Card.propTypes = {
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};