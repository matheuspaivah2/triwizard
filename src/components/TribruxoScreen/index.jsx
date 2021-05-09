import { Component } from "react";
import { Container } from './styles'
import Group from '../../assets/bandeiras.png'

import CardList from "../CardList";

class TribruxoScreen extends Component{
    render(){

        const { player1, player2, player3, characters, started, handleClick} = this.props;
        return(
            <Container>
                {
                    !started ?
                    <div>
                        <h1>Torneio Tribruxo</h1>
                        <h2>Veja os finalistas do torneio Tribruxo</h2>
                        <img className='flags' src={Group} alt="" />
                        <h3>Clique no botão para encontrar os feiticeiros!</h3>
                    </div>  
                    :
                    <CardList characters={characters} player1={player1}
                        player2={player2} player3={player3}>
                        
                    </CardList>
                }              
                
                <button onClick={handleClick}>
                    {
                        started ? 'Try Again' : 'Find'
                    }
                </button>
                {/* {
                    tribruxo &&
                    <ModalCard character={characters[player]}  characters={characters} player={player} />
                } */}
            </Container>
        )
    }
}

export default TribruxoScreen;