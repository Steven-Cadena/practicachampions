import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { NavLink } from 'react-router-dom'

export default class DetalleJugador extends Component {

    state = {
        jugador:{}
    }

    buscarJugador = () => {
        var idjugador = this.props.idjugador;
        var request = "/api/Jugadores/" + idjugador;
        var url = Global.urlequipos + request;
        axios.get(url).then(res=>{
            this.setState({
                jugador:res.data
            });
        });
    }

    componentDidMount = () => {
        this.buscarJugador();
    }
    render() {
        return (
            <div>
                <h1>{this.state.jugador.nombre}</h1>
                <img src={this.state.jugador.imagen} style={{width:"80px", height:"80px"}}/>
                <h2>{this.state.jugador.posicion}</h2>
                <h2>{this.state.jugador.fechaNacimiento}</h2>
                <h2>{this.state.jugador.pais}</h2>
                <NavLink to={"/jugadores/" + this.props.idequipo} className="btn btn-success">
                    Jugadores
                </NavLink>
            </div>
        )
    }
}
