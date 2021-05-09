import { Component } from "react";
import { Container } from './styles'
import Group from '../../assets/bandeiras.png'
import Loading from '../Loading'
import CardList from "../CardList";

class TribruxoScreen extends Component{
    render(){

        const { player1, player2, player3, characters, started, handleClick, load} = this.props;
        return(
            <Container>
                {
                    !started &&
                    <div>
                        <h1>Triwizard Tournament</h1>
                        <h2>See the finalists of triwizard tournament</h2>
                        <img className='flags' src={Group} alt="" />
                        <h3>Push the button to find the wizards!</h3>
                    </div>  
                }    
                {
                    started && !load ?       
                    <CardList characters={characters} player1={player1}
                        player2={player2} player3={player3}>
                        
                    </CardList>
                    :
                    null
                }              
                {
                    load ?
                        <Loading className='load'/>
                        :
                            <button onClick={handleClick}>
                            {
                                started ? 'Try Again' : 'Find'
                            }
                            </button>
                }
                
               
               
            </Container>
        )
    }
}

export default TribruxoScreen;