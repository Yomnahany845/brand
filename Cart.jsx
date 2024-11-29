import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context'

function Cart() {
    const {cart, changeQuantity}= useContext(DataContext)
    const [total ,setTotal ]=useState(0)
    useEffect(()=>{
        let totalPrice = cart.reduce((acc,item)=> acc + item.price * item.count,0)
        setTotal(totalPrice)
    },[cart])
    console.log(cart)
  return (
    <>
    <h1 className='container'>Cart</h1>
   <table className='table container'>
    <thead>
        <tr>
            <th className='border p-2 text-center'>ID</th>
            <th className='border p-2 text-center'>Name</th>
            <th className='border p-2 text-center'>Price</th>
            <th className='border p-2 text-center'>Count</th>
        </tr>
    </thead>
    <tbody>
        
            {cart.map((item)=>(
                <tr>
                    <td className='border p-2 text-center'>{item.id}</td>
                    <td className='border p-2 text-center'>{item.title}</td>
                    <td className='border p-2 text-center'>{item.price}</td>
                    
                    <td className='border p-2 text-center'>
                    <button className='btn btn-primary m-3' onClick={()=> changeQuantity (item.id, item.count +1)}>+</button>
                        {item.count}
                    <button className='btn btn-danger m-3'onClick={()=> changeQuantity (item.id, item.count -1)}>-</button>
                    </td>
                </tr>
            ))}
        
    </tbody>
   </table>
   <div className='container'>
    <h1>Total : {total} EG</h1>
   <button className='btn btn-primary'>Buy Now</button>
   </div>
    </>
  )
}

export default Cart