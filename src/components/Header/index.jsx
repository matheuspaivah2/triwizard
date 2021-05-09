import { Component } from "react";
import Logo from '../../assets/hplogo.png'
import { LogoHeader, NavMenu, ButtonMenu } from './styles'


class Header extends Component{
    render(){

        const { handle } = this.props;
        return(
            <header>
                <LogoHeader src={Logo} alt="logo" />
                <NavMenu>
                    
                    <ButtonMenu onClick={()=> handle('tribruxo')}>Triwizard</ButtonMenu>

                    <ButtonMenu onClick={()=> handle('discovery')}>Discovery</ButtonMenu>
                   
                    
                </NavMenu>
            </header>
        )
    }
}

export default Header;