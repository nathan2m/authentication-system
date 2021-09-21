import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Form, Main, PageTitle, Label, TextField, Button, Link, Paragraph } from './styles';


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const history = useHistory();
    
    function handleName(event){
        setName(event.target.value);
    }
    
    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setSenha(event.target.value);
    }

    async function handleRegister(event){
        event.preventDefault();
        try {
            const response = await api.post("/auth/register", {
                name,
                email,
                password,
            });
            alert("Nova conta criada com sucesso!");
            history.push({
                pathname: '/',
                state: response.data
            });
        } catch (err) {
            alert("Usuário já existe ou valores inválidos!");
            console.log(err.response.data.error);
        }
    }

    return(
        <Main>
            <PageTitle>Registrar nova Conta:</PageTitle>
            <Form>
                <Paragraph>
                    <Label>
                        Nome:
                        <TextField type='text' value={name} placeholder='Insira seu nome' onChange={handleName}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        E-mail:
                        <TextField type='text' value={email} placeholder='name@email.com' onChange={handleEmail}/>
                    </Label>
                </Paragraph>
                <Paragraph>
                    <Label>
                        Senha:
                        <TextField type='password' value={password} placeholder='Insira sua senha' onChange={handlePassword}/>
                    </Label>
                </Paragraph>
                <Button type='button' value='Registrar nova Conta' onClick={handleRegister} />
                <Link href='/'>Voltar para Autenticação</Link>
            </Form>
        </Main>
    );
}