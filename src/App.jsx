import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Veuillez entrer un prénom.');
      return;
    }
    setName('');
    alert('Bonjour ' + name);
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

export default App;