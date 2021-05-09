import { Component } from "react";
import Slytherin from '../../assets/Slytherin.png'
import Hufflepuff from '../../assets/Hufflepuff.png'
import Ravenclaw from '../../assets/Ravenclaw.png'
import Gryffindor from '../../assets/Gryffindor.png'
import { ContainerCard, Container, HeaderCard, Logo, FigCard, Mold, Ances, ImgCard, HouseName } from './styles.js'


class Card extends Component{

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
            <Container>
                    <ContainerCard>
                        <HeaderCard>
                            {logoHouse && <Logo src={logoHouse} characters={characters} player={player}/>}
                            <HouseName characters={characters} player={player}> {character.house}</HouseName>
                        </HeaderCard>
                        
                        <FigCard>
                            <ImgCard src={character.image} characters={characters} player={player} alt="foto" />
                            <Mold></Mold>
                        </FigCard>
                        
                        <h5>{character.name}</h5>

                        
                        {/* <Ances characters={characters} player={player}>
                            {character.ancestry ? character.ancestry : 'unknow'}
                        </Ances> */}
                        
{/*                         
                        <h6>{character.alive ? 'Live' : 'Dead'}</h6> */}
                    </ContainerCard>

                    
                </Container>
        )
    }
}

export default Card;