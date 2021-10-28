import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { Redirect } from 'react-router';

export default class InsertarApuesta extends Component {
    cajausuarioRef = React.createRef();
    cajarealmadridRef = React.createRef();
    cajaatleticoRef = React.createRef();
    cajafechaRef = React.createRef();

    state = {
        status:false
    }

    insertarApuesta = (e) => {
        e.preventDefault();
        var usuario = this.cajausuarioRef.current.value;
        var real = this.cajarealmadridRef.current.value;
        var atleti = this.cajaatleticoRef.current.value;
        var fecha = this.cajafechaRef.current.value;
        var resultado = real + "-" + atleti;
        var apuesta = {
            usuario:usuario
            , resultado:resultado
            , fecha:fecha
        }
        var request = "/api/Apuestas";
        var url = Global.urlequipos + request;
        axios.post(url,apuesta).then(res=>{
            this.setState({
                status:true
            })
        });



    }
    render() {
        if(this.state.status == true){
            return(<Redirect to={"/apuestas"}/>)
        }
        return (
            <div>
                <h1>insertar apuesta</h1>
                <form style={{width:"500px" , margin:"0 auto", display:"table"}} 
                onSubmit={this.insertarApuesta}>
                    <div className="form-group row">
                        <label>Usuario:</label>
                        <input type="text" className="form-control" ref={this.cajausuarioRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Real Madrid:</label>
                        <input type="number" className="form-control" ref={this.cajarealmadridRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Atletico:</label>
                        <input type="number" className="form-control" ref={this.cajaatleticoRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Fecha:</label>
                        <input type="text" className="form-control" ref={this.cajafechaRef}/>
                    </div>
                    <br/>
                    <button className="btn btn-info">
                        Nueva Apuesta
                    </button>
                </form>
            </div>
        )
    }
}
