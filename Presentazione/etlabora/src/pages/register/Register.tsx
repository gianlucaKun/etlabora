import React, { useState } from "react";
import { register } from "../../services/authService/AuthService";

interface RegisterProp {
  switchToLogin: () => void;
}

const Register: React.FC<RegisterProp> = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePassword = (password: string) => {
    const hasNumber = /\d/;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
    const isValidLength = password.length >= 8;
    return hasNumber.test(password) && hasSymbol.test(password) && isValidLength;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors(null);
    setSuccessMessage(null);

    // Basic validation
    if (!formData.name || !formData.surname || !formData.username || !formData.email || !formData.password) {
      setErrors("Tutti i campi sono obbligatori");
      return;
    }

    // Password validation
    if (!validatePassword(formData.password)) {
      setErrors("La password deve contenere almeno un numero, un simbolo e deve essere lunga almeno 8 caratteri.");
      return;
    }

    try {
      const data = await register(formData.email, formData.password, formData.name, formData.surname, formData.username);
      setSuccessMessage("Registrazione avvenuta con successo!");
      console.log("Registration successful ", data);
    } catch (err) {
      setErrors("Errore nella registrazione: " + err.message);
      console.error("Registration error: ", err);
    }
  };

  return (
    <div>
      <h2>Registrazione</h2>
      {errors && <div style={{ color: "red" }}>{errors}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Cognome:
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
