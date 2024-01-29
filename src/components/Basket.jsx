// Basket.jsx
import React from 'react';
import Product from './Product';

function Basket(props) {
  const { products, onAdd } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className='row'>
        {products.map((product, index) => (
          <Product key={index} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
  );
}

export default Basket;
