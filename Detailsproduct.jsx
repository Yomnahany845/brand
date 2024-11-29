import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context'

function Detailsproduct() {
    const {id}= useParams ()
    const {products, addtoCart} =useContext(DataContext)
  const DetailsProducts=  products.find((product)=> product.id == id)
  return (
    <div>
    <h1>details</h1>
    
        <img src={DetailsProducts.image} alt="" style={{width:"18rem"}} />
        <h1>Name :{DetailsProducts.title}</h1>
        <span>Price{DetailsProducts.price}</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio aliquam maxime commodi quasi voluptates fugiat ipsam ut voluptatibus praes</p>
        <button className='btn btn-primary' onClick={()=>addtoCart(DetailsProducts)}>Add to Cart</button>
    </div>
  )
}

export default Detailsproduct