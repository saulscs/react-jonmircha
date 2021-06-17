import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades (props){
    return(
        <div>
            <h2 style={{color:'red'}}>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
                <li>{props.arreglo.join(',')}</li>
                <li>{props.objeto.nombre + "-" + props.objeto.correo}</li>
                <li>{props.elementosReact}</li>
                <li>{props.arreglo.map(props.funcion).join(',')}</li>
                <li>{props.ComponenteReact}</li>
            </ul>
        </div>
    )
}

//Si necesitamos tener propiedades por defecto usamos el default

Propiedades.defaultProps = {
    porDefecto: 'Las props',
}


//Definer las caracteristicas que necesitamos que soporte las propiedades
Propiedades.propTypes={
    numero: PropTypes.number.isRequired,
}