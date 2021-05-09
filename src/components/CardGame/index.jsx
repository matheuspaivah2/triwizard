import { Component } from "react";
import { ContainerCard, HouseName, ImgCard, ContainerStyled, FigCard, Mold, Logo, HeaderCard, Ances } from './styles'
import Slytherin from '../../assets/Slytherin2.png'
import Hufflepuff from '../../assets/Hufflepuff.png'
import Ravenclaw from '../../assets/Ravenclaw.png'
import Gryffindor from '../../assets/Gryffindor.png'

class CardGame extends Component{

    getLogoHouse = (character) =>{
    
        let output = '';
    
        switch (character.house){
            case 'Gryffindor':
                output = Gryffindor;
            break;
            case 'Hufflepuff':
                output = Hufflepuff;
            break;
            case 'Ravenclaw':
                output = Ravenclaw;
            break;
            case 'Slytherin':
                output = Slytherin;
            break;
            default:
                output = Gryffindor;
            
        }
    
        return output
    }
    render(){

        const { character, player, characters } = this.props;

        const logoHouse = this.getLogoHouse(character)

        return(
           
                <ContainerStyled>
                    <ContainerCard className='test'>
                        <HeaderCard>
                            <Logo src={logoHouse} characters={characters} player={player}/>
                            <HouseName character={character} player={player}> {character.house}</HouseName>
                        </HeaderCard>
                        
                        <FigCard>
                            <ImgCard src={character.image} characters={characters} player={player} alt="foto" />
                            <Mold></Mold>
                        </FigCard>
                        
                        <h4>{character.name}</h4>

                        
                        <Ances character={character} player={player}>
                            {character.ancestry ? character.ancestry : 'unknow'}
                        </Ances>
                        
                        
                        <h5>{character.alive ? 'Live' : 'Dead'}</h5>
                    </ContainerCard>

                    
                </ContainerStyled>
               
            
        )
    }
}

export default CardGame;