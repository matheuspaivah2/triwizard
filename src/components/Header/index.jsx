import { Component } from "react";
import Logo from '../../assets/hplogo.png'
import { LogoHeader, NavMenu } from './styles'
import Button from '../Button'

class Header extends Component{
    render(){
        return(
            <header>
                <LogoHeader src={Logo} alt="logo" />
                <NavMenu>
                    <Button>Triwizard</Button>
                    <Button>Discovery</Button>
                </NavMenu>
            </header>
        )
    }
}

export default Header;