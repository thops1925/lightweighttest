import React from 'react'
import './BottomNav.scss'
import { motion } from 'framer-motion';
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};
const BottomNav = () => (
    <div className='bottom_nav_container'>
        <div className='bottom_nav' >
            {['Overview', 'Episode', 'Details'].map((item, index) => (
                <div key={index} className='bottom_nav_item'>
                    <a href={`#${item}`} className='bottom_nav_item-title'>{item}</a>
                </div>
            ))}
        </div>
        <motion.div variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='bottom_nav_item-right'>

            <svg width="222" height="15" viewBox="0 0 122 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7.5" y1="7.5" x2="114.5" y2="7.50001" stroke="#106580" stroke-width="15" stroke-linecap="round" />
            </svg>
            <div className='animation'>
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
        </motion.div>
    </div>
)
export default BottomNav