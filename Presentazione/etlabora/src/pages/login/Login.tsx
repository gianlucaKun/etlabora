import React, { useState } from "react";
import { login } from "../../services/authService/AuthService";

interface LoginProps {
  switchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ switchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors(null);
    setSuccessMessage(null);

    if (!formData.email || !formData.password) {
      setErrors("Tutti i campi sono obbligatori");
      return;
    }

    try {
      const data = await login(formData.email, formData.password);
      setSuccessMessage("Login avvenuto con successo!");
      console.log("Login successful ", data);
    } catch (err) {
      setErrors("Errore nel login: " + err.message);
      console.error("Login error: ", err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errors && <div style={{ color: "red" }}>{errors}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={switchToRegister}>Non hai un Acoount? REGISTRATI</button>
    </div>
  );
};

export default Login;
