import { memo } from "react";

const ContadorHijo = ({contador, sumar, restar}) =>{
    console.log("Hijo se renderiza");
    return (
        <div style={{border: 'thin solid #000', margin: '1rem', padding: '1rem'}}>
            <h2>Hijo del contador</h2>
            <h3>{contador}</h3>
            <nav>
                <buton onClick={sumar}>Sumar</buton>
                <buton onClick={restar}>Restar</buton>
            </nav>
        </div>
    );
};

export default memo(ContadorHijo);