import React from 'react'

function Basket2(props) {
  const {cartItems, onAdd,onRemove } = props;
  const itemsPrice = cartItems.reduce((a,c) => a +c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.015;
  const totalPrice = itemsPrice + taxPrice;
  return (
  <div className="block col-1">
      <h2>Cart items</h2>
     <div>{cartItems.length === 0 && <div> cart is Empty</div>}</div>
      {cartItems.map((item) => (
      <div key={item.id} className='row'>
        <div>{item.name}</div>
          <div>
            <button onClick={()=>onAdd(item)} className='add'>+</button>
             <button onClick={()=>onRemove(item)} className='remove'>-</button>
          </div>
          <div className='col-2 tex-right'>
            {item.qty} * Rs{item.price.toFixed(2)}
     </div>
     </div>
      ))}
      {cartItems.length !== 0 && (
        <>
        <hr></hr>
        <div className='row'>
          <div className='col-2'>Items Price</div>
          <div className='col-1 text-right'>Rs{itemsPrice.toFixed(2)}</div>
        </div>
        <div className='row'>
          <div className='col-2'>Tax Price</div>
          <div className='col-1 text-right'>Rs{taxPrice.toFixed(2)}</div>
        </div>
        <div className='row'>
          <div className='col-2'>Total Price</div>
          <div className='col-1 text-right'>Rs{totalPrice.toFixed(2)}</div>
        </div>
        <div className='row'>
          <button onClick={() => alert('confirm')}>
            Proceed to Payment
          </button>
        </div>
        </>
      )}
  </div>
  )
}

export default Basket2