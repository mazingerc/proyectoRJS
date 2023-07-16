import React, { useState } from 'react';
import { auth } from '..components/firebase'; 

function RegistroForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      
      setEmail('');
      setPassword('');

     
      alert('Registro exitoso!');
    } catch (error) {
    
      setError(error.message);
    }
  };
  return (
    <div>
      <h2>Registro</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistroForm;

