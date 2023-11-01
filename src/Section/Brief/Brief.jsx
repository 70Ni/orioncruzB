import React from 'react'
import '../Brief/Brief.css'
import Img from '../../Images/Img/Image.png'

function Brief() {
  return (
    <div className='outerwrapper'>
        <div className="left">
            <div className="Header">We craft personalized solutions.</div>
            <div className="subtxt">We believe in the power of customization. Your business is unique, and your needs too.</div>
            <div className="para">Your success is our success. We measure our achievements by the results we deliver. We're not satisfied until you see tangible improvements in your digital performance.</div>
        </div>
        <div className="right">
            <img src= {Img} alt="img" className='Imag-Brief' />   
        </div>
    </div>
  )
}

export default Brief