import { Component } from "react";
import Wand from '../../assets/wand.png'
import { Container } from './styles'

class InitialScreen extends Component{
    render(){
        return(
            <Container >
                <h1>WELCOME!</h1>
                <h3>Explore the magic world and find the finalists of triwizard tournament.</h3>
                <img src={Wand} alt="Wand" />
            </Container>
        )
    }
}

export default InitialScreen;