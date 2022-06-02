import React, { useContext, useState } from 'react'
import { AuthContext } from '../hooks/context'
import Button from '../UI/Button'
import MyInput from '../UI/Input'
import './Login.scss'




function Login() {

    const { isAuth, setAuth } = useContext(AuthContext);
    const [loggin, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const login = (e) => {
        e.preventDefault();
        if (loggin === '123' && pass === '123') {
            localStorage.setItem('auth', 'true')
            setAuth(true)
            setLogin('')
            setPass('')
        }
        else {
            setLogin('')
            setPass('')
            alert('Попробуйте другой пароль')
        }
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <MyInput onChange={(e) =>{setLogin(e.target.value)}} type='text' placeholder="Login"></MyInput>
            <MyInput onChange={(e) => {setPass(e.target.value)}} type='password' placeholder='password'></MyInput>
            <Button onClick={login}>Войти</Button>
        </div>
    )
}

export default Login