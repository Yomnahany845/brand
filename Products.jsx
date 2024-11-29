import React, { useContext } from 'react'
import { DataContext } from '../context'
import { Link } from 'react-router-dom'

function Products() {
    const {products,addtoCart} = useContext(DataContext)
    console.log(addtoCart)
  return (
    <div>
    <h1 className='container'>Products</h1>
    <div className='products d-flex flex-wrap justify-content-center'>
        {
            products.map((item, index)=>(
                <div className='card m-3' key={index}>
                   <Link to={`${`/products/`+item.id}`}>
                   <img src={item.image} alt="" className='card-img' style={{width:"18rem ", height:"18rem"}} />
                   </Link>
                    
                    <div className='card-body'>
                    <h2>{item.title}</h2>
                    <span>{item.price} EG</span>
                    </div>
                    <button className='btn btn-primary m-2' onClick={()=>addtoCart(item)}>Add to Cart</button>
                </div>
            ))
        }

    </div>
    </div>
  )
}

export default Products