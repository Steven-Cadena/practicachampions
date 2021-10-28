import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Apuestas from './Champions/Apuestas';
import DetalleJugador from './Champions/DetalleJugador';
import Detalles from './Champions/Detalles';
import Home from './Champions/Home';
import InsertarApuesta from './Champions/InsertarApuesta';
import Jugadores from './Champions/Jugadores';
import MenuChampions from './Champions/MenuChampions'


export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuChampions/>
                    <Switch>
                        <Route exact path="/detalles/:idequipo"
                        render={props=>{
                            var idequipo = props.match.params.idequipo;
                            return (<Detalles idequipo={idequipo}/>)
                        }}
                        />
                        <Route eact path="/home"
                        component={Home}/>
                        <Route exact path="/jugadores/:idequipo"
                        render={props=>{
                            var idequipo = props.match.params.idequipo;
                            return (<Jugadores idequipo={idequipo}/>)
                        }}/>
                        <Route exact path="/detallejugador/:idjugador/:idequipo"
                        render={props=>{
                            var idjugador = props.match.params.idjugador;
                            var idequipo = props.match.params.idequipo;
                            return (<DetalleJugador idjugador={idjugador} idequipo={idequipo}/>)
                        }}/>
                        <Route exact path="/apuestas" 
                        component={Apuestas}/>
                        <Route exact path ="/insertarapuesta"
                        component={InsertarApuesta}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
