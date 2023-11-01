import React from 'react'
import clientimg from '../../Images/Img/Deolittle.png'
import '../Clients/Client.css'
function Clients() {
  return (
    <div className="clients-outer">
        <div className="Header">Clients</div>
        <div className="clientsection">
            <img src={clientimg} alt="logo" className='Clintlogo'/>
            <img src={clientimg} alt="logo" className='Clintlogo'/>
            <img src={clientimg} alt="logo" className='Clintlogo'/>
            <img src={clientimg} alt="logo" className='Clintlogo'/>
            <img src={clientimg} alt="logo" className='Clintlogo'/>
            <img src={clientimg} alt="logo" className='Clintlogo'/>
            <img src={clientimg} alt="logo" className='Clintlogo'/>
            <img src={clientimg} alt="logo" className='Clintlogo'/>
        </div>
    </div>
  )
}

export default Clients