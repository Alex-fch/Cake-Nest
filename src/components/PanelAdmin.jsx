import styled from 'styled-components';
import PanelButton from './PanelButton';
import { theme } from '../assets/styles/theme';
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { FiChevronUp } from "react-icons/fi"
import { FiChevronDown } from "react-icons/fi"
import PanelDetail from './PanelDetail';
import { useContext, useState } from 'react';
import { ButtonContext } from '../utils/context/Context';

export default function PanelAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const { setTextButton } = useContext(ButtonContext)
    const  handleClick = (value) => {
        setIsOpen(!isOpen);
        setTextButton(value);
    }
    const icon = isOpen  ? <FiChevronDown className="icon"/> : <FiChevronUp className="icon"/>
    return (
        <StyledPanelAdmin>
            <div className='divo'>
                <div className='divin'>
                    <PanelButton
                                onClick={() => handleClick("")}
                                text="" 
                                background={theme.colors.dark} 
                                colortext={theme.colors.white} 
                                Icon = { icon }
                                size="70px"
                    />
                    <PanelButton
                                onClick={() => handleClick("Ajouter un produit")}
                                text="Ajouter un produit" 
                                background={theme.colors.white} 
                                colortext={theme.colors.greyDark} 
                                Icon={<AiOutlinePlus className="icon"/>}
                                size="250px"
                    />
                    <PanelButton
                                onClick={() => handleClick("Modifier un produit")}
                                text="Modifier un produit" 
                                background={theme.colors.white} 
                                colortext={theme.colors.greyDark} 
                                Icon={<MdModeEditOutline className="icon"/>}
                                size="250px"
                    />
                </div>
                <PanelDetail isopen={ isOpen }/>
            </div>
        </StyledPanelAdmin>
    )
}

const StyledPanelAdmin = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;

    .icon {
        font-size: ${theme.fonts.size.P1};
    }

    .divo {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 30px 30px 30px;        
    }

    .divin {
        display: flex;
        padding: 0 0 0px 100px;
    }


`