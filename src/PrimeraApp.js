import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//FC
const PrimeraApp = ({saludo, subtitulo}) => {
    //Js solo puede returnar un objeto a la vez, no es una condición propia de react
    // const saludo = 'Hola mundo';
    return ( 
        <Fragment>
            <h1>{ saludo }</h1> 
            <p>{subtitulo}</p>
        </Fragment>
        
    );
}
PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
 
export default PrimeraApp;