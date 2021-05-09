import { Component } from 'react';

import './styles/App.css';

import InititalScreen from './components/InitialScreen'
import Header from './components/Header'
import TribruxoScreen from './components/TribruxoScreen'
import Discovery from './components/Discovery'

class App extends Component{

  state ={
    characters: [],
    gameIsStarted: false,
    player1: null,
    player2: null,
    player3: null,
    load: false,
    tribruxo: false,
    discovery: false,
    initscreen: true,
  }

  getCharacters = () => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then((response) => response.json())
    .then((response) => this.setState({
      characters: response,
    }))
    .catch((err) => console.log((err)))
  }

  componentDidMount(){
    this.getCharacters();

  }

  handleClick = () =>{
    
    this.setState({
      load: true,
      tribruxo: true,
      gameIsStarted: true,
    })
    

    fetch(this.getCharacter('player1'))
    .then(() => this.getCharacter('player2'))
    .then(()=> this.getCharacter('player3'))

    setTimeout(() => {
      this.setState({load: false})
    }, 1500);

  }

 
  getCharacter = (player) =>{

    const { characters, player1, player2} = this.state
    
    if( player === 'player1'){
      this.setState({player1: this.getRandomInt(0,11)})
      return
    }
    
    //Player 2
    if ( player === 'player2'){
      let p2 = this.getRandomInt(0,11)

      const getPlayerTwo = () =>{
          if( characters.filter((per) => per.house !== characters[player1].house).includes(characters[p2]) ){
            this.setState({player2: p2})
            return p2;
          } 

        p2 = this.getRandomInt(0,11)
        getPlayerTwo()
      }
      getPlayerTwo()
      return p2
    }

    //Player 3
    if ( player === 'player3'){
      let p3 = this.getRandomInt(0,11)

      const getPlayerThree = () =>{
        
          if( characters.filter((per) => per.house !== characters[player1].house).includes(characters[p3]) 
              &&
              characters.filter((per) => per.house !== characters[player2].house).includes(characters[p3])
            ){
          this.setState({player3: p3})
          return p3;

        } 
        p3 = this.getRandomInt(0,11)
        getPlayerThree()
      }
      getPlayerThree()
      return p3
    }

  }


  getRandomInt =(min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  setModal = (screen) =>{
    
      switch(`${screen}`){
        case 'tribruxo':
          this.setState({tribruxo: true});
          break;
        case 'discovery':
          this.setState({
            discovery: true,
            gameIsStarted: false,
          });
          break;  
        case 'initscreen':
          this.setState({initscreen: true});
          break;
        
          default:
      }
    
  }

  changeModal = (screen) =>{
    
    this.setState({
    tribruxo: false,
    discovery: false,
    initscreen: false,
    })

    this.setModal(screen)
    
    
  }

  render(){

    const { characters, gameIsStarted, player1, player2, player3, load, tribruxo, initscreen, discovery } = this.state;
    
    return (
      <div className="App">
      
        <Header handle={this.changeModal}/>

        {
          initscreen ?
          <InititalScreen /> : null
        }
       
        {
          tribruxo ?
            <TribruxoScreen tribruxo={tribruxo} handle={this.changeModal} handleClick={this.handleClick} load={load}
             characters={characters} player1={player1} player2={player2} player3={player3} started={gameIsStarted}/> : null
        }

        {
          discovery &&
            <Discovery />
            
        }
      
    </div>
  );
}
}

export default App;
