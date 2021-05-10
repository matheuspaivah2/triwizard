import { Component } from "react";
import Logo from '../../assets/hplogo.png'
import { LogoHeader, NavMenu, ButtonMenu, ButtonMusic, HeaderStyled } from './styles'
import { FaItunesNote } from "react-icons/fa";
import Song from '../../assets/theme.mp3'
import ReactAudioPlayer from 'react-audio-player';


class Header extends Component{

    state ={
        audio: 'white'
        
    }

    music = () =>{
        const { audio } = this.state;
        const theme = document.getElementById('song')
        if ( audio === 'white'){
            // this.setState({
            //     audio: 'grey'
            // })
            
            theme.play();
        }

        if ( audio === 'grey'){
            this.setState({
                audio: 'white'
            })
            theme.pause();
        }
        
    }
    render(){

        const { handle } = this.props;
        return(
            <HeaderStyled>
                <LogoHeader src={Logo} alt="logo" />
                <ButtonMusic onClick={this.music} borderColor={this.state.audio}><FaItunesNote/></ButtonMusic>
                <ReactAudioPlayer type="audio/mpeg" ref="audio_tag" id='song' src={Song} volume={0.5} onPLay={true} muted={false} loop={true} autoPlay={true}/>
                <NavMenu>
                    
                    <ButtonMenu onClick={()=> handle('tribruxo')}>Triwizard</ButtonMenu>

                    <ButtonMenu onClick={()=> handle('discovery')}>Discover</ButtonMenu>
                   
                    
                </NavMenu>
            </HeaderStyled>
        )
    }
}

export default Header;