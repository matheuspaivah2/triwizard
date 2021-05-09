import { Component } from "react";
import { Container } from './styles'
import Button from '../Button'
import ModalCard from '../ModalCard'
import Group from '../../assets/bandeiras.png'

class TribruxoScreen extends Component{
    render(){

        const { player, character, characters, changeModal, tribruxo} = this.props;
        return(
            <Container>
                <h1>Torneio Tribruxo</h1>
                <h2>Veja os finalistas do torneio Tribruxo</h2>
                <img src={Group} alt="" />
                <h3>Clique no botão para encontrar os feiticeiros!</h3>
                <button >Find</button>
                {/* {
                    tribruxo &&
                    <ModalCard character={characters[player]}  characters={characters} player={player} />
                } */}
            </Container>
        )
    }
}

export default TribruxoScreen;