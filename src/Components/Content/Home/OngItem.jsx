import React from 'react'
import './Home.scss'

function OngItem(props) {
  return (
    <div className='OngItem'>   
        <div className='OngItImg'>
            <img src={props.imgage}/>
        </div>
        <p>{props.descript}</p>
        <span>{props.rate}/10</span>
    </div>
  )
}

export default OngItem