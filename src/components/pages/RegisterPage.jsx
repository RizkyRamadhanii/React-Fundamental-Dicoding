import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../RegisterInput";
import {register} from '../../utils/network-data';

function RegisterPage() {
    const navigate = useNavigate() ;

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <div className="register-form">
        <section className='register-page'>
            <h1>Register</h1>
            <h2>Gak perlu serius-serius ya isinya ...</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>Kembali ke <Link to="/">Masuk</Link></p>
        </section>
        </div>
    )
}

export default RegisterPage;