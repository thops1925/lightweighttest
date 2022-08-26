import React from 'react'
import './BottomNav.scss'

const BottomNav = () => (
    <div className='bottom_nav_container'>
        <div className='bottom_nav' >
            {['Overview', 'Episode', 'Details'].map(item => (
                <div className='bottom_nav_item'>
                    <a href={`#${item}`} className='bottom_nav_item-title'>{item}</a>
                </div>
            ))}
        </div>


        <div className='bottom_nav_item-right'>
            <svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.5" y1="1.5" x2="48.5" y2="1.5" stroke="#106580" stroke-width="3" stroke-linecap="round" />
            </svg>

            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7.5" y1="7.5" x2="8.5" y2="7.5" stroke="white" stroke-width="15" stroke-linecap="round" />
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7.5" y1="7.5" x2="8.5" y2="7.5" stroke="white" stroke-width="15" stroke-linecap="round" />
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7.5" y1="7.5" x2="8.5" y2="7.5" stroke="white" stroke-width="15" stroke-linecap="round" />
            </svg>

        </div>

    </div>
)

export default BottomNav