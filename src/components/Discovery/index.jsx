import { Component } from "react";
import { Nav, Disc } from './styles'
import Card from '../Card'
import Loading from '../Loading'

class Discovery extends Component{

    state ={
        characters: [],
        gameIsStarted: false,
        type: 'students',
        house: '',
        load: true,
      }
    
      getCharacters = () => {
        const { type, house } = this.state;
        fetch(`http://hp-api.herokuapp.com/api/characters/${type}${house}`)
        .then((response) => response.json())
        .then((response) => this.setState({
          characters: response,
        }))
        .then(() => this.setState({
          load: false,
        }))
        .catch((err) => console.log((err)))
      }
    
      componentDidMount(){
        this.getCharacters();
    
      }

      componentDidUpdate(_,prevState){

        if(this.state.type !== prevState.type || this.state.house !== prevState.house){
          this.getCharacters()
        }
        
      }

      handleCharacters = (name, house) =>{
        this.setState({load: true})

        this.changeType(name)
        this.changeHouse(house)

        setTimeout(() => {
          this.setState({load: false})
        }, 1000);
      }

      changeType = (name) =>{
        this.setState({type: name})
      }

      changeHouse = (house) =>{
        this.setState({house: `${house}`})
      }


    render(){

      const { characters, load, house, type } = this.state;
        return(
            <Disc>
              <div className='container'>
                  <Nav>
                      <button onClick={() => this.handleCharacters('students','')} className='bt' id='btStudents'></button>
                      <button onClick={() => this.handleCharacters('staff','')} className='bt' id='btStaff'></button>
                      <button onClick={() => this.handleCharacters('','house/gryffindor')} className='bt' id='btGryffindor'></button>
                      <button onClick={() => this.handleCharacters('','house/hufflepuff')} className='bt' id='btHufflepuff'></button>
                      <button onClick={() => this.handleCharacters('','house/ravenclaw')} className='bt' id='btRavenclaw'></button>
                      <button onClick={() => this.handleCharacters('','house/slytherin')} className='bt' id='btSlytherin'></button>
                  </Nav>

                  <div className='renderList'>
                      <h3>
                        {
                          house ? house
                          :
                          type
                        }
                      </h3>
                      <div className='list'>
                        {
                          load && <Loading/>
                        }
                          {
                            !load &&
                            characters.map((char, index) => <Card key={index} character={char}  characters={characters} player={index}/>)
                          }
                          
                        
                      </div>
                  </div>
              </div>
                
            </Disc>
            
        )
    }
}

export default Discovery;