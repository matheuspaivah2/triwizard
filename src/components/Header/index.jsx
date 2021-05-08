import { Component } from "react";
import Logo from '../../assets/hplogo.png'
import { LogoHeader } from './styles'

class Header extends Component{
    render(){
        return(
            <header>
                <LogoHeader src={Logo} alt="logo" />
            </header>
        )
    }
}

export default Header;