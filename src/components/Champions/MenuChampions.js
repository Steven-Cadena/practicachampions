import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../../Global'

export default class MenuChampions extends Component {
    state = {
        equipo:[]
        ,status: false
    }

    cargarEquipo = () => {
        var request = "/api/Equipos";
        var url = Global.urlequipos + request;
        axios.get(url).then(res => {
            this.setState({
                equipo:res.data
                , status:true
            })
            console.log(this.state.equipo);
        });
        
    }

    componentDidMount = () => {
        this.cargarEquipo();
    }

    render() {
        // if (this.state.status == true) {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
            
                  <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink className="nav-link" to={"/home"}>Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink  className="nav-link" to={"/apuestas"}>
                          Apuestas
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown08" >
                            {this.state.equipo.map((equipo,index)=>{
                                return(
                                <li key={index}>
                                    <NavLink className="dropdown-item" to={"/detalles/" + equipo.idEquipo }> {equipo.nombre} </NavLink>
                                </li>
                                );
                            })} 
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            )
        // }else{
        //     return(<h1> cargando.. </h1>)
        // }

    }
}
