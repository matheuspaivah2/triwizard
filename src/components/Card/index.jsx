import { Component } from "react";

import { ContainerCard, ImgCard, HouseName }from './styles.js'


class Card extends Component{


   
    render(){
        

        const { character, player, characters } = this.props;


        return(
            <ContainerCard >
                
                <ImgCard src={character.image} characters={characters} player={player} alt="foto"/>
                <h4>{character.name}</h4>
                <HouseName characters={characters} player={player}> {character.house}</HouseName>
                <h5>{character.alive ? 'Live' : 'Dead'}</h5>
            </ContainerCard>
        )
    }
}

export default Card;