import React, { useEffect, useState } from 'react';
import productData from "./../assets/data.json";

const Products = () => {
  const [data, setData] = useState();
  const addTocart = (item) => {
    let cartItems = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    let alreadyAdded = false
    if (cartItems.length) {
      for (let index = 0; index < cartItems.length; index++) {
        if (cartItems[index].mobileName == item.mobileName) {
          alreadyAdded = true;
        }
      }
    }
    if (alreadyAdded) {
      return alert("Product already added to cart.")
    }
    cartItems.push(item);
    localStorage.setItem("product", JSON.stringify(cartItems));
  }
  useEffect(() => {
    setData(productData);
  }, [])
  return (
    <>
      <div className='devicesbexs'style={{padding: "10px"}}>
        {
          data?.map((item) => {
            return (
              <div key={item.mobileName}>
                  <p className="offers">-{item.offerPercentage}% off</p>
                  <a className="devicecartbtn" onClick={() => addTocart(item)}>Add to cart</a>
                  <img src={item.imageUrl} />
                  
                  <p className="product-title">{item.mobileName}</p>
                  <ul>
                      <li>${item.priceAfterOffer} <del>${item.MRP}</del></li>
                      <li><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></li>
                  </ul>

              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Products;
