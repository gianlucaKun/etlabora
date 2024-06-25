import React from "react";

interface LoginProps {
  switchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ switchToRegister }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={switchToRegister}>
        Non hai un Acoount? REGISTRATI
      </button>
    </div>
  );
};

export default Login;
