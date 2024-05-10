import styled from 'styled-components';
import PanelButton from './PanelButton';
import { theme } from '../assets/styles/theme';
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { FiChevronUp } from "react-icons/fi"
import { FiChevronDown } from "react-icons/fi"
import PanelDetail from './PanelDetail';
import { useContext } from 'react';
import { ProductContext } from '../utils/context/Context';

export default function PanelAdmin() {
    const { isopen, setIsOpen, setLabel } = useContext(ProductContext);
    //const [isOpen, setIsOpen] = useState(false);
    //const [label, setLabel] = useState("");
    const  handleClick = (label) => {
        setLabel(label);
        if(label === "" || (label !== "" && isopen === false)) {
            setIsOpen(!isopen);
        }
        
    }
    const icon = isopen  ? <FiChevronDown className="icon"/> : <FiChevronUp className="icon"/>
    return (
        <StyledPanelAdmin>
            <div className='divo'>
                <div className='divin'>
                    <PanelButton
                                onClick={() => handleClick("")}
                                label="" 
                                Icon = { icon }
                    />
                    <PanelButton
                                onClick={() => handleClick("Ajouter un produit")}
                                label="Ajouter un produit" 
                                Icon={<AiOutlinePlus className="icon"/>}
                    />
                    <PanelButton
                                onClick={() => handleClick("Modifier un produit")}
                                label="Modifier un produit" 
                                Icon={<MdModeEditOutline className="icon"/>}
                    />
                </div>
                <PanelDetail/>
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