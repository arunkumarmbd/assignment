import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalMRP, setTotalMRP] = useState(0);
  const [loyaltyTillHundered, setloyaltyTillHundered] = useState(0);
  const [loyaltyAfterHundered, setloyaltyAfterHundered] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  useEffect(() => {
    const cartProduct = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : [];
    setProducts(cartProduct);
    let totalMRPTemp = 0;
    let discountedPriceTemp = 0;
    if (cartProduct.length) {
      for (let index = 0; index < cartProduct.length; index++) {
        totalMRPTemp = parseInt(totalMRPTemp) + parseInt(cartProduct[index].MRP);
        discountedPriceTemp = parseInt(discountedPriceTemp) + parseInt(cartProduct[index].priceAfterOffer);
      }
      setTotalMRP(totalMRPTemp);
      setDiscountedPrice(discountedPriceTemp);
    }
    debugger
  }, [products])
  useEffect(() => {
    if (discountedPrice >= 50 && discountedPrice < 100) {
      setloyaltyTillHundered(discountedPrice - 50)
    }
    if (discountedPrice >= 100) {
      setloyaltyTillHundered(50)
      setloyaltyAfterHundered(discountedPrice - 100)
    }
  }, [discountedPrice])
  const deleteItemFromCart = (item) => {
    let cartItems = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    let index = cartItems.findIndex(x => x.mobileName == item.mobileName);
    cartItems.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(cartItems));
    setProducts(cartItems);
  }
  return (
    <div>
      <section className="page-title">
          <div className="container p-4">
            <h2>Your Cart</h2>
          </div>
      </section>

      <section className="deviceSection py-5">
          <div className="container">
            <div className="row">
                <div className="col-lg-8">
                  <div className="cart-main-wrapper">
                    {
                      products?.length ?
                      products?.map((item) => 
                        <div className="cart-items">
                          <div className="name_action">
                              <h3>{item.mobileName}</h3>
                              <div className="actionMain">
                                <div className="actionItem">
                                    <a onClick={() => deleteItemFromCart(item)}>
                                      <i className="fa-solid fa-trash"></i> Remove
                                    </a>
                                </div>
                              </div>
                          </div>
                          
                          <div className="detailsMain">
                              <div className="cart-items-wrapper">
                                <div className="imagesBoxes">
                                    <img src={item.imageUrl} className="img-fluid" alt="images" />
                                </div>
                                <div className="imagesBoxesText">
                                    
                                    <p>{item.description}</p>
                                    <div className="pricecartitem">
                                      {
                                        item.memoryStorage ?? <div className="memories"><span>Memory: </span>{item.memoryStorage}</div>
                                      }
                                      {/* <!-- <div className="coloredArticle"><span>Color: </span>Black</div> --> */}
                                    </div>
                                </div>
                              </div>
                              <div className="cart-item-wraps">
                                <h4>${item.priceAfterOffer}</h4>                        
                              </div>
                          </div>
                        </div>    
                      ) : <p>No products in your cart</p>
                    }
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="orderSummary design2 bg-white  mb-3">
                      <h4>Order Summary</h4>
                      <div className="orderSummaryInner">
                        <div className="billingslabs">
                            <div className="billingItem border-bottom">
                              <div className="billingHead">
                                  MRP
                              </div>
                              <div className="billingprice">
                                  $ { totalMRP }
                              </div>
                            </div>
                            <div className="billingItem border-bottom">
                              <div className="billingHead">
                                  After Discount
                              </div>
                              <div className="billingprice">
                                  $ { discountedPrice }
                              </div>
                            </div>
                            <div className="billingItem border-bottom">
                              <div className="billingHead">
                                  Loyalty point on 50$ - 100$ spent
                              </div>
                              <div className="billingprice">
                                  {loyaltyTillHundered} P
                              </div>
                            </div>
                            <div className="billingItem border-bottom">
                              <div className="billingHead">
                                Loyalty point after 100$ spent
                              </div>
                              <div className="billingprice">
                                  {loyaltyAfterHundered} P
                              </div>
                            </div>
                            <div className="billingItem  border-bottom">
                              <div className="billingHead">
                                  Total Loyalty points
                              </div>
                              <div className="billingprice">
                                  {loyaltyTillHundered + loyaltyAfterHundered} P
                              </div>
                            </div>
                            <div className="buttomGroup mt-3">
                              <div className="pricing-sections mb-0">
                                  
                                  <div className="button-box pb-4">
                                    <a href="#" className="theme-btn btn-style-four w-100"><span
                                          className="txt d-flex gap-2 align-items-center">
                                          Proceed to Checkout</span></a>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>

          </div>
      </section>
    </div>
  );
}

export default Cart;
