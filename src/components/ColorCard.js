import React from 'react'
import './ColorCard.css'


export default function ColorCard({ hexColor }) {

    const boxStyle = {
        backgroundColor: hexColor,
        width: '5rem',
        height: '5rem',
        
    }

  return (
    <div className='color-card-root'>
        <div className='color-box' style= {boxStyle} />
        <div className='hex'>
            {hexColor}
        </div>
        <div className=''></div>
    </div>
  )
}
