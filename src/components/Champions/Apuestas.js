import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../../Global'

export default class Apuestas extends Component {
    state = {
        apuestas:[]
    }

    cargarApuestas = () => {
        var request = "/api/Apuestas";
        var url = Global.urlequipos + request;
        axios.get(url).then(res=>{
            this.setState({
                apuestas:res.data
            });
        });
    }

    componentDidMount = ()=>{
        this.cargarApuestas();
    } 
    render() {
        return (
            <div>
                <NavLink to={"/insertarapuesta"} className="btn btn-danger">
                    Realizar apuesta
                </NavLink>
                <h1 style={{color:"red"}}>Local: Real Madrid, Visitante: Atlético de Madrid</h1>
                <table>
                    <thead>
                        <th>USUARIO</th>
                        <th>RESULTADO</th>
                        <th>FECHA</th>
                    </thead>
                    <tbody>
                        {this.state.apuestas.map((apuesta,index)=>{
                            return(<tr key={index}>
                                <td>{apuesta.usuario}</td>
                                <td>{apuesta.resultado}</td>
                                <td>{apuesta.fecha}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
