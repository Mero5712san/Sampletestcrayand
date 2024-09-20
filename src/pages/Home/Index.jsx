import React, { useState } from 'react';
import Button from '../../components/button';
import Products from '../../assets/Products';
const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div>
      <h1>E-Cart</h1>
      <div>
        {Products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.img} alt="" />
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
