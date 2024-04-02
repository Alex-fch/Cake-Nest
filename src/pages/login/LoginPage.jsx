import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
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
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <div>
        <h2>Connectez-vous</h2>
        <input type="text" value={name} placeholder="Entrez votre prénom..." onChange={handleChange} />
        <button type="submit">Accédez à votre espace</button>
      </div>
    </form>
  );
}

export default LoginPage;