import React from 'react';

function EstadoHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };

        // setInterval(()=>{
        //     this.setState({
        //         contador: this.state.contador + 1.
        //     })
        // },1000);
        
    }
    render(){
        return(
            <div>
                <h2 style={{color:'red'}}>El estado</h2>
                <EstadoHijo contadorHijo={this.state.contador}/>         
            </div>
        )
    }
}