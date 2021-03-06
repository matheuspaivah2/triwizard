import { Component } from "react";
import { BlackBackground, ContainerCard, HouseName, ImgCard, Container, FigCard, Mold, Logo, HeaderCrad, Ances, Back } from './styles'
import Slytherin from '../../assets/Slytherin2.png'
import Hufflepuff from '../../assets/Hufflepuff.png'
import Ravenclaw from '../../assets/Ravenclaw.png'
import Gryffindor from '../../assets/Gryffindor.png'

class ModalCard extends Component{

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
                
            
        }
    
        return output
    }
    render(){

        const { character, player, characters, handle } = this.props;

        const logoHouse = this.getLogoHouse(character)

        return(
            <BlackBackground>
                <Container>
                    <ContainerCard>
                        <HeaderCrad>
                            {
                                character.house && <Logo src={logoHouse} characters={characters} player={player}/>
                            }
                            {
                                character.house ? <HouseName character={character} player={player}> {character.house}</HouseName> : <h6>Unknown</h6>
                            }
                            
                        </HeaderCrad>
                        
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

                    <Back onClick={() =>handle('')} character={character} player={player}>Back</Back>
                </Container>
               
            </BlackBackground>
        )
    }
}

export default ModalCard;