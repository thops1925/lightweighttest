import React, { useState } from 'react'
import ContentSelected from '../Content/ContentSelected';
import './Trending.scss'
import { motion } from 'framer-motion'

const Trending = ({ data }) => {
    const [trendingData, setTrendingData] = useState([]);
    const [open, setOpen] = useState(true)
    const selectTrendingData = (item) => setTrendingData(item);
    const slideOpen = () => setOpen(!open);
    return (
        <section className='discover_grid'>
            {open ? (
                <>
                    {data.map((item, index) => (
                        <motion.div whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }} key={index} onClick={() => selectTrendingData(item)} className='discover_item'>
                            <div onClick={slideOpen} className='discover_item-image'>
                                <img src={item.image[0]} alt={item.title} />
                                <div className='discovery_shadow' />
                                <div className='discover_item-title'>
                                    <h3>{item.title}</h3>
                                    <p>{item.category}</p>
                                    <div className='discover_item-rating'>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z" fill="#FBC94A" />
                                        </svg>
                                        <p>{item.rating}</p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))
                    }
                </>
            ) : <ContentSelected trendingData={trendingData} />}
        </section >
    )
}



export default Trending