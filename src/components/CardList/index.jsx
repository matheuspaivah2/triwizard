import { Component } from "react";
import './styles.css'
import CardGame from '../CardGame'


class CardList extends Component{

    render(){

        const { characters, player1, player2, player3 } = this.props;
        
        return(
            <ul className='cardList'>
                 {characters[player1] ? <CardGame character={characters[player1]}  characters={characters} player={player1}/> : null}
                 {characters[player2] ? <CardGame character={characters[player2]}  characters={characters} player={player2}/> : null}
                 {characters[player3] ? <CardGame character={characters[player3]}  characters={characters} player={player3}/> : null}
                 
            </ul>
        )
    }
}

export default CardList;