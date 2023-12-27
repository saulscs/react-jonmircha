import React from 'react'

const CartItem = ({data, removeFromCart}) => {
    const { id, name, price, quantity} = data; 
    return (
        <div style={{borderBottom: 'thin solid gray', padding:'1rem'}}>
            <h4>{name}</h4>
            <h6>{price}</h6>
            <h6>{quantity}</h6>
            <h5>{quantity * price}</h5>
            <button onClick={()=> removeFromCart(id)}>Eliminar uno</button>
            <button onClick={() => removeFromCart(id, true)}>Eliminar todo</button>
        </div>
    )
}
export default CartItem;