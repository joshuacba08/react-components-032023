import { useState } from 'react';
import './Count.css';
import Button from '../Button/Button';

function Count(props){

    // Declaro mis estados, en este caso el estado count tiene un valor inicial definido dentro de useState(valorInicial)
    const [ count, setCount ] = useState(0);
 
    // suma 1 a el estado actual de count
    const addCount = () => {
        console.log('sumar')
        setCount(count + 1);
    }

    // Resta 1 a el estado actual de count
    const subCount = () => {
        console.log('restar')
        setCount(count - 1);
    }

    return(
        <div>
            <button onClick={subCount}> - </button>
            <span>{count}</span>
            <button onClick={addCount}> + </button>
        </div>
    )
}

export default Count;