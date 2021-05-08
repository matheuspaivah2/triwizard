import { Component } from "react";
import './styles.css'

class InitialScreen extends Component{
    render(){
        return(
            <section className="welcome">
                <h1>Torneio Tribruxo</h1>
                <h3>Clique no botão para encontrar os feiticeiros!</h3>
            </section>
        )
    }
}

export default InitialScreen;