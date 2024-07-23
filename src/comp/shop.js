import React, { useState } from 'react'
import "./shop.css"
import banner from "../assets/banner.jpg"
import franbow from "../assets/franbow.jpg"
import { AiFillEye, AiFillHeart, AiOutlineClose } from 'react-icons/ai'


const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    const [showDetail, setShowDetail] = useState(false)
    const [detail, setDetail] = useState([])

    const detailPage = (product) => 
        {
            const detaildata = ([{product}])
            const productdetail = detaildata[0]['product']
            
            setDetail(productdetail)
            setShowDetail(true)
        }
        const closedetail = () => 
        {
            setShowDetail(false)
        }
  return (
    <>
         {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.name}</h2>
                    <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                    <h3>${detail.price}</h3>
                    <button onClick={() => addtocart (detail)}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
        <div className='shop'>
            <div className='container'>
                <div className='left_box'>
                    <div className='category'>
                        <div className='header'>
                            <h2>
                                All Categories
                            </h2>
                        </div>
                        <div className='box'>
                            <ul>
                                <li onClick={() => allcatefilter()}> 
                                    #All
                                </li>
                                <li onClick={() => Filter ('strategies')}>
                                    #Strategies
                                </li>
                                <li onClick={() => Filter ('sport simulators')}>
                                    #Sport simulators
                                </li>
                                <li onClick={() => Filter ('survival')}>
                                    #Survival
                                </li>
                                <li onClick={() => Filter ('incest')}>
                                    #Incest
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='img_box'>
                            <img  src={banner}/>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src={franbow}/>
                        </div>
                    </div>
                    <div className='product_box'>
                        <div className='product_container'>
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <>
                                                <div className='box'>
                                                    <div className='img_box'>
                                                        <img src={curElm.image} />
                                                        <div className='icon'>
                                                            <li>
                                                                <AiFillHeart />
                                                            </li>
                                                            <li onClick={() => detailPage (curElm)}>
                                                                <AiFillEye />
                                                            </li>
                                                        </div>
                                                    </div>
                                                    <div className='detail'>
                                                        <h3>
                                                            {curElm.name}
                                                        </h3>
                                                        <p>
                                                            ${curElm.price}
                                                        </p>
                                                        <button onClick={() => addtocart(curElm)}>
                                                            Add to cart
                                                        </button>
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
        </div>
    </>
  )
}

export default Shop