import React, { useState } from "react";
import { register } from "../../services/authService/AuthService";

interface RegisterProp {
  switchToLogin: () => void;
}

const Register: React.FC<RegisterProp> = ({ switchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await register(email, password, name, surname,  username);
      console.log("Registration successful ", data);
    } catch (err) {
      console.error("Registration error: " + err);
    }
  };

  return (
    <div>
      <h2>Registrazione</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br /> 
        <label>
          Cognome:
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </label>
        <br/>

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Registrati</button>
      </form>
      <button onClick={switchToLogin}>Hai già un account? LOGIN!</button>
    </div>
  );
};

export default Register;
