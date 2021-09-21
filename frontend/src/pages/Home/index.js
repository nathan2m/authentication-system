import React, {Component} from 'react';
import { Paragraph, Text, Link, Main } from './styles';

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.location.state,
        }
    }

    render(){
        function handleLogout(event){
            try {
                localStorage.setItem('auth', false);
            } catch (err) {
                console.log(err);
            }
        }
        return (
            <>
                <Main>
                    <Paragraph>Olá, {this.props.location.state.user.name}!</Paragraph>
                    <Text>Você está autenticado!</Text>
                    <Link onClick={handleLogout} href ='/'>Sair</Link>
                </Main>
            </>
        )
    }
}