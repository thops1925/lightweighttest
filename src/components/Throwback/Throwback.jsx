import React from 'react'
import { throwback } from '../../constant'
import './Throwback.scss'

const Throwback = () => (

    <div className='throwback_container'>
        {throwback.map((item, index) => (
            <div key={index} className='throwback_item'>
                <div className='throwback_item-image'>
                    <img src={item} alt={item} />
                </div>
            </div>
        ))}
    </div>
)

export default Throwback