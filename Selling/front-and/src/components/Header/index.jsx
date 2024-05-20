import React from 'react'
import "./Header.css"
import hero from '../../assets/hero_2.jpg'
function index() {
  return (
    <div className='header-section1'>
      <span className='header-title'>Shop with Us</span> <br />
      <span className='header-title-description'>Lorem ipsum dolor voluptatem  corrupti ipsum reiciendis unde impedit. Quae labore cumque vel libero id delectus.</span><br />
      <span className='header-title-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, in.</span> <br />
      <button style={{width:"200px",height:"50px",backgroundColor:"white",color:"black",fontWeight:"bolder"}}>SHOP NOW </button>
      <button className='button1'style={{width:"300px",height:"50px",backgroundColor:"white", color:"black",fontWeight:"bolder"}}>CLUB MEMERSHIP</button>
    </div>
  )
}

export default index

