import { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import InputTextPanel from "./InputTextPanel";
import PrimaryButtonPanel from "./PrimaryButtonPanel";
import { fakeMenu } from '../utils/data/fakeMenu';
import { FakeMenuContext } from "../utils/context/Context";

export default function PanelAdminForm() {
  const [productName, setProductName] = useState('');
  const [urlLink, setUrlLink] = useState('');
  const [price, setPrice] = useState('');
  const { fakeMenuTable, setFakeMenu } = useContext(FakeMenuContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    if(urlLink.length === 0){
      const url = "../../src/assets/images/cupcake-item.png";
      setUrlLink(url);
    }
    const newCake = {
      id: fakeMenu.length + 1,
      imageSource: urlLink,
      isAdvertised: false,
      isAvailable: true,
      price: parseInt(price),
      quantity: 0,
      title: productName,
    }
    setFakeMenu([...fakeMenuTable, newCake]);
    setProductName('');
    setUrlLink('');
    setPrice('');
  }

  const handleChangeName = (event) => {
    setProductName(event.target.value);
  }
  const handleChangeLink = (event) => {
    if(event.target.value.trim() === ''){
      const url = "../../src/assets/images/cupcake-item.png";
      setUrlLink(url);
    } else {

      setUrlLink(event.target.value);
    }
  }
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  }

  return (
    <DivPanel>
      <Image>
        {urlLink === "" ? <span>Aucune image</span> : <img src={urlLink}/>}
      </Image>
      <Form onSubmit={handleSubmit}>
        <InputTextPanel value={productName} onChange={handleChangeName} placeholder={"Nom du produit"} required Icon={<GiCupcake className="icon" />}/>
        <InputTextPanel value={urlLink} onChange={handleChangeLink} placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png"} Icon={<BsFillCameraFill className="icon" />}/>
        <InputTextPanel value={price} onChange={handleChangePrice} placeholder={"Prix"} required Icon={<MdOutlineEuro className="icon" />}/>
        <PrimaryButtonPanel label={"Ajouter un nouveau produit"}/>
      </Form>
    </DivPanel>
  );
}
const Form = styled.form`
    max-width: 500px;
    min-width: 400px;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Pacifico", sans-serif;

    .icon {
        font-size: ${theme.fonts.size.P2};
        margin-left: 8px;
    }
`;

const DivPanel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 5px;
  margin: 60px 10px 150px 50px;
  width: 250px;
  span {
    margin: auto;
    color: ${theme.colors.greyMedium};
    font-family: 'OpenSans', sans-serif;
  }
  img {
    width: auto;
    height: 100%
  }
`