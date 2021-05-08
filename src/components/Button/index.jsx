import { Component } from "react";
import './styles.css'


class Button extends Component{
    render(){

        const { handle } = this.props;
        return(
            <button onClick={handle}>{this.props.children}</button>
        )
    }
}

export default Button;