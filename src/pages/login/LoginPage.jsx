import LoginForm from './LoginForm';
import styled from 'styled-components';
import Background from '../../assets/images/tarts.jpg';
import Logo from '../../components/Logo';

export default function LoginPage() {
  return (
    <Container>
      <Logo/>
      <LoginForm/>
    </Container>
  );
}
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 98vh;
    background-image: url(${Background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `
