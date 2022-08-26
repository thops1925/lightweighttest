import React from 'react'
import { trending } from '../../constant'
import './Discover.scss'

const Discover = () => {
    return (
        <div id='Discover' className='discover_container'>
            <div className='discover_header'>
                <h2>Trending <span>this week</span></h2>
            </div>

            <div className='discover_grid'>
                {trending.map(item => (

                    <div className='discover_item'>
                        <div className='discover_item-image'>
                            <img src={item.image} alt={item.title} />
                            <div className='discovery_shadow' />
                            <div className='discover_item-title'>
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Discover