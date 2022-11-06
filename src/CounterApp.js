import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {
    const [ counter, setCounter] = useState(value);
    //handleAdd
    const handleAdd = () => {
        setCounter( counter +1 );
        // setCounter((c) => c +1 );
    }
    const handleReset = ()=> {
        setCounter (value);
    }

    const handleSubtract = ( )=> {
        setCounter( counter - 1);
    }
    return ( 
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button 
                onClick={handleAdd}
            >+1</button>
            <button
                onClick={handleReset}
            >Reset</button>
            <button
                onClick={handleSubtract}
            >-1</button>
        </>
     );
}
//Cuando se obtiene el valor con el wrapper.find() y se aplica el método "text( )"  este método retorna un string, razón por la cual el valor ahora es string.
CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

export default CounterApp;