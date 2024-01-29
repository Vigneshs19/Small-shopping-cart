import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Basket from './components/Basket';
import Basket2 from './components/Basket2';
import Data from './components/Data';

function App() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x =>
         x.id === product.id ? {...exist, qty: exist.qty + 1}:x));
    }
    else{
     setCartItems([...cartItems, {...product, qty: 1}]) ;
    }
  };
  const onRemove =(product) => {
    const exist = cartItems.find((x)=> x.id === product.id);
   if(exist.qty === 1) {
    setCartItems(cartItems.filter((x)=> x.id !== product.id));
   } else {
    setCartItems(cartItems.map(x =>
       x.id === product.id ? {...exist, qty: exist.qty - 1}:x
      ));
   }
  }
  return (
    <div className='App'>
      <Header countCartItems={cartItems.length}/>
      <div className='row'>
        <Basket onAdd={onAdd} products ={products}/>
        <Basket2 onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
