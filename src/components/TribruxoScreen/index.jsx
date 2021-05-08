import { Component } from "react";
import { Container } from './styles'
import Button from '../Button'

class Tribruxo extends Component{
    render(){
        return(
            <Container>
                <h1>Torneio Tribruxo</h1>
                <h2>Veja os finalistas do torneio Tribruxo</h2>
                <h3>Clique no botão para encontrar os feiticeiros!</h3>
                <Button>Find</Button>
            </Container>
        )
    }
}

export default Tribruxo;