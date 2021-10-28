import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { NavLink } from 'react-router-dom'

export default class Detalles extends Component {

    state= {
        equipo:{}
    }

    cargarEquipo = () => {
        var id = this.props.idequipo;
        var request = "/api/Equipos/" + id;
        var url = Global.urlequipos + request;
        axios.get(url).then(res=>{
            this.setState({
                equipo:res.data
            });
            console.log(this.state.equipo);
        });
    }

    componentDidMount = ()=>{
        this.cargarEquipo();
    }
    
    componentDidUpdate = (oldProps) => {
        if(this.props.idequipo != oldProps.idequipo){
            this.cargarEquipo();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.equipo.nombre}</h1>
                <img src={this.state.equipo.imagen} style={{width:"150px", height:"150px;"}}/>
                <h2>Champions: {this.state.equipo.champions}</h2>
                <p>{this.state.equipo.descripcion}</p>
                <NavLink to={"/jugadores/" + this.state.equipo.idEquipo}
                className="btn btn-success">
                    Jugadores
                </NavLink>
                <NavLink to={"/home"}
                className="btn btn-info">
                    Volver
                </NavLink>
            </div>
        )
    }
}
