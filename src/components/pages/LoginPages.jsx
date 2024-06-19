import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LoginInput from "../LoginInput";
import { login } from "../../utils/network-data";

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <div className="register-form">
        <section className='register-page'>
            <h1>Aplikasi Catatan</h1>
          <h2>Silakan masuk untuk melanjutkan ...</h2>
          <LoginInput login={onLogin} />
          <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
        </section>
        </div>
      );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
  }
   
  export default LoginPage;