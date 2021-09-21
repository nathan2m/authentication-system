import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { PageTitle, SmallerTitle, Main, Form, Label, Button, Paragraph, TextField, Link } from './styles';

export default function Authenticate() {
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const history = useHistory();

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setSenha(event.target.value);
    }

    async function handleAuthenticate(event) {
        event.preventDefault();
        try {
            const response = await api.post("/auth/authenticate", {
                email,
                password,
            });
            localStorage.setItem('auth', true);
            history.push({
                pathname: '/home',
                state: response.data
            });
        } catch (err) {
            alert("Senha ou E-mail inválidos!");
            console.log(err.response.data.error);
        }
    }

    return (
        <Main>
            <PageTitle>Autenticação</PageTitle>
            <SmallerTitle>Insira seu e-mail e senha</SmallerTitle>
            <Form>
                <Paragraph>
                    <Label>
                        E-mail:
                        <TextField type='text' value={email} placeholder='nome@email.com' onChange={handleEmail} />
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Senha:
                        <TextField type='password' value={password} placeholder='Insira sua senha' onChange={handlePassword} />
                    </Label>
                </Paragraph>
                <Button type='button' value='Login' onClick={handleAuthenticate} />
                <Link href='/register'>Registrar nova Conta</Link>
            </Form>
        </Main>
    );
}