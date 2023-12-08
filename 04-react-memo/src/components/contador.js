import { useCallback, useState } from "react";
import ContadorHijo from "./contadorHijo";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [input, setInput] = useState("");

    const sumar = useCallback(() => setContador(contador + 1), [contador]);
    const restar = useCallback(() => setContador(contador - 1), [contador]);
    const handleInput = (e) => setInput(e.target.value);
    console.log(input);

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Contador</h2>
            <nav>
                <buton onClick={sumar}>Sumar</buton>
                <buton onClick={restar}>Restar</buton>
            </nav>
            <h3>{contador}</h3>
            <input type="text" onChange={handleInput} value={input}/>
            <ContadorHijo 
                contador={contador}
                sumar={sumar}
                restar={restar}
            />
        </div>
    );
};

export default Contador;