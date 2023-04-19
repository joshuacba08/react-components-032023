import { useState } from 'react';
import './Count.css';
import Button from '../Button/Button';

function Count(props){

    // Declaro mis estados, en este caso el estado count tiene un valor inicial definido dentro de useState(valorInicial)
    const [ count, setCount ] = useState(1);
    const stock = 20;
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
            <button disabled={count<=1} onClick={subCount}> - </button>
            <span>{count}</span>
            <button disabled={count===stock} onClick={addCount}> + </button>
        </div>
    )
}

export default Count;