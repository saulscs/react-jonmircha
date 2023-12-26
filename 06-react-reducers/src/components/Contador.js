import {useReducer} from 'react';

const TYPES = {
    SUMAR: "SUMAR",
    RESTAR: "RESTAR",
    SUMAR_5: "SUMAR_5",
    RESTAR_5: "RESTAR_5",
    RESET: "RESET",
}

const initialState = {count: 0};

function reducer(state, action) {
    switch(action.type) {
        case TYPES.SUMAR:
            return {count: state.count + 1}
        case TYPES.RESTAR:
            return {count: state.count - 1}
        case TYPES.SUMAR_5:
            return {count: state.count + 5}   
        case TYPES.RESTAR_5:
            return {count: state.count - 5}
            case TYPES.RESET:
                return initialState;
        default:
            return state;
    }
};

const Contador = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const sumar = () => dispatch({type: TYPES.SUMAR});
    const sumar5 = () => dispatch({type: TYPES.SUMAR_5});
    const restar = () => dispatch({type: TYPES.RESTAR});
    const restar5 = () => dispatch({type: TYPES.RESTAR_5});
    const reset = () => dispatch({type: TYPES.RESET})

    return(
        <div>
            <p>Contador</p>
            <nav>
                <p>Suma 1</p>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <hr/>
                <p>Sumar 5</p>
                <button onClick={sumar5}>+</button>
                <button onClick={restar5}>-</button>
                <hr/>
                <p>Reset</p>
                <button onClick={reset}>Reset</button>
            </nav>
            <h2>{state.count}</h2>
        </div>
    )
};

export default Contador;