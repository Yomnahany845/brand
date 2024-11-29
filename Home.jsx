// import React from 'react'
// import'./home.css'
// export default function Home() {
//   return (
//     <header className='container m-2'>
//         <h1>Home</h1>
//         <img src="" alt="" />
//     </header>
    
//   )
// }
import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src="https://marketplace.canva.com/EAGNED2p3iY/1/0/1600w/canva-black-and-brown-elegant-minimalist-fashion-presentation-pDOq6-noLGo.jpg" alt="" style={{width:"97rem", height:"42rem"}} />
        <Carousel.Caption>
          <h3>Hello in our boutique</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/premium-photo/hangers-with-different-female-clothes-presenting-retail-store_96943-1118.jpg" alt=""style={{width:"97rem", height:"42rem"}} />
        <Carousel.Caption>
          <h3>Hello in our boutique</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn-useast1.kapwing.com/static/templates/fashion-facebook-cover-photo-template-regular-ef596498.webp" alt=""style={{width:"97rem", height:"42rem"}} />
        <Carousel.Caption>
          <h3>Hello in our boutique</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;