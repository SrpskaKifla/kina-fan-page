import React from 'react';
import '../Form.css';
import useForm from '../useForm';
import validateInfo from '../../../helpers/validateInfo';

function Register() {
  const {
    handleChange,
    inputValue,
    handleSubmit,
    errors,
    focusName,
    show,
    show2,
    showPassword,
    showPassword2,
  } = useForm(validateInfo);
  const { name, email, password, confirmPassword } = inputValue;

  return (
    <div className="register-wrapper">
      <h2>Postani i ti jedan od nas!</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            ref={focusName}
            name="name"
            type="text"
            placeholder="Name:"
            value={name}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="input-field">
          <input
            name="email"
            type="email"
            placeholder="Email:"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="input-field">
          <input
            name="password"
            type={show ? 'text' : 'password'}
            placeholder="Password:"
            value={password}
            onChange={handleChange}
          />
          <span onClick={showPassword}>👀</span>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="input-field">
          <input
            name="confirmPassword"
            type={show2 ? 'text' : 'password'}
            placeholder="Confirm password:"
            value={confirmPassword}
            onChange={handleChange}
          />
          <span onClick={showPassword2}>👀</span>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
