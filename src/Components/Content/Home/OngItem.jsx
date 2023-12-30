import React from 'react'
import './Home.scss'

function OngItem(props) {
    console.log(props);
  return (
    <div className='OngItem'>   
        <div className='OngItImg'>
            <img src={props.imgage}/>
        </div>
        <p>{props.descript}</p>
       <span>{props.name}</span>
    </div>
  )
}

export default OngItem