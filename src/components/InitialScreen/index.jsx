import { Component } from "react";
import './styles.css'
import Wand from '../../assets/wand.png'
import { Container } from './styles'

class InitialScreen extends Component{
    render(){
        return(
            <Container >
                <h1>WELCOME!</h1>
                <h3>Explore o mundo magico e encontre os finalistas do torneio tribruxo.</h3>
                <img src={Wand} alt="Wand" />
            </Container>
        )
    }
}

export default InitialScreen;