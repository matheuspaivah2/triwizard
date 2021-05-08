import { Component } from "react";
import './styles.css'
import Wand from '../../assets/wand.png'

class Loading extends Component{
    render(){
        return(
            <img className='wand' src={Wand} alt=""/>
        )
    }
}

export default Loading;