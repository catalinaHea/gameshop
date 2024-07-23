import React, { useEffect, useState } from 'react'
import './home.css'
import backgorund from "../assets/1.webp"
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Home = ({addtocart}) => {
    const [newProduct, setNewProduct] = useState([])
    const [trendingProducts, setTrandingProducts] = useState(Homeproduct)
    const filteredcate = (x) => {
       {
        const filteredproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x
        }) 
        setTrandingProducts(filteredproduct)
       }
    }
    const allTrendingProduct = () =>
        {
            setTrandingProducts(Homeproduct)
        }
   
    const productCateogry = () => {
        const newCategory = Homeproduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newCategory)
    }
  return (
    <>
        <div className='home'>
            <div className='top_banner' style={{background: `url(${backgorund})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}>
                <div className='contant'>
                    <h3>
                        Buy Hoi4
                    </h3>
                    <h2>
                        Right Now
                    </h2>
                    <p>
                        75% off
                    </p>
                    <Link to='/' className='link'>
                        Shop Now
                    </Link>
                </div>
            </div>
            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2>
                                    Treanding product
                                </h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => allTrendingProduct()}>All</h3>
                                <h3 onClick={() => filteredcate('new')}>New</h3>
                                <h3 onClick={() => filteredcate('best seller')}>Best sellers</h3>
                                <h3 onClick={() => filteredcate('sale')}>Sale</h3>
                            </div>
                        </div>
                        <div className='products'>
                        <div className='container'>
                  {
                    trendingProducts.map((curElm) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.image} alt=''></img>
                            <div className='icon'>
                              <div className='icon_box'>
                              <FaEye />
                              </div>    
                              <div className='icon_box'>
                              <FaHeart />
                              </div>                        
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.name}</h3>
                            <p>${curElm.price}</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='right_container'>
                            <div className='testimonial'>
                                <div className='head'>
                                    <h3>
                                        Our testimonials
                                    </h3>
                                </div>
                                <div className='detail'>
                                    <div className='img_box'>
                                        
                                    </div>
                                    <div className='info'>
                                        <h3>Someone</h3>
                                        <h4>Gay</h4>
                                        <p>
                                            dasdasff
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='newsletter'>
                                <div className='head'>
                                    <h3>
                                        Newsletter
                                    </h3>
                                </div>
                                <div className='form'>
                                    <p>
                                        Join our mailing list
                                    </p>
                                    <input type='email' placeholder='E-mail' autoComplete='off' />
                                    <button>subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='header'>
                            <h2> 
                                New Products
                            </h2>
                        </div>
                        {
                            newProduct.map((curElm) => {
                                return (
                                    <>
                                        <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className='icon'>
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                trendingProducts.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className='icon'>
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                trendingProducts.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className='icon'>
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home