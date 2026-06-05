import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Components/Products'
import { items } from '../context/Data'
import DataContext from '../context/DataContext'
import './Product_Detail.css'


const Product_Detail = () => {
  const { id } = useParams();
  const {addToCart} = useContext(DataContext);
  const { cart, setCart } = useContext(DataContext);

  const product = items.find(pro => pro.id === Number(id)); 

  if (!product) {
    return <div className="text-center my-5">Product not found.</div>;
  }

  const relatedProducts = items.filter(
    pro =>
      pro.category.toLowerCase() === product.category.toLowerCase() 
      && pro.id !== product.id 
  );

  

  return (
    <div>
      
      <div className="container my-5">
        <div className="product-detail-card">
          <div className="image-section">
            <img src={product.imgSrc} alt={product.title} className="product-image" />
          </div>
          <div className="info-section">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price} ₹</p>
            <button
              className="btn add-to-cart"
              onClick={() => addToCart(product.id,product.title, product.price, product.imgSrc)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center my-5">Related Products</h2>
      <Products products={relatedProducts} /> 
    </div>
  );
}

export default Product_Detail;