import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme"
import InputText from  "../../components/InputText";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../components/PrimaryButton";
import { IoChevronForward } from "react-icons/io5";

export default function LoginForm() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Veuillez entrer un prénom.');
      return;
    }
    navigate(`/order/${name}`);
    setName('');
  }

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Bienvenue chez  Nous !</h2>
        <hr/>
        <span>Connectez-vous</span>
        <InputText value={name} onChange={handleChange} placeholder={"Entrez votre prénom"} required Icon={<BsPersonCircle className="icon" />} />
        <PrimaryButton Icon={<IoChevronForward className="icon"/>} label={"Mon espace"}/>
    </Form>
  );
}
const Form = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Pacifico", sans-serif;

    hr {
        border: 1.5px solid ${theme.colors.loginLine};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    h2 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5};
    }

    span {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P4};
    }

    .icon {
        font-size: ${theme.fonts.size.P2};
        margin-left: 8px;
    }
`;