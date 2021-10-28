import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {

    state={
        jugadores:[]
    }

    cargarJugadores = () => {
        var idequipo = this.props.idequipo;
        var request = "/api/Jugadores/JugadoresEquipo/" + idequipo;
        var url = Global.urlequipos + request;
        axios.get(url).then(res=>{
            this.setState({
                jugadores:res.data
            });
        });
    }
    componentDidMount= ()=> {
        this.cargarJugadores();
    }
    render() {
        return (
            <div>
                <NavLink to={"/home"} className="btn btn-success">
                    Volver
                </NavLink>
                <h1>jugadores</h1>
                <table>
                    <thead>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Detalles</th>
                    </thead>
                    <tbody>
                        {this.state.jugadores.map((jug,index)=>{
                            return(<tr>
                                <td>{jug.nombre}</td>
                                <td>
                                    <img src={jug.imagen} style={{width:"100px" , height:"100px"}}/>
                                </td>
                                <td>
                                    <NavLink to={"/detallejugador/" + jug.idJugador + "/" + this.props.idequipo} className="btn btn-danger">
                                        Detalles
                                    </NavLink>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>)
            </div>
        )
    }
}
