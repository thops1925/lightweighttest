import React from 'react'
import './Content.scss'

const ContentSelected = ({ trendingData }) => {
    console.log(trendingData)
    return (
        <section id='Episode' className='discover_grid_selected'>
            {[trendingData].map((item, index) => (
                <div key={index} className='discover_item_selected'>
                    <div className='discover_item-image_selected'>
                        <img src={item.image[0]} alt={item.title} />
                        <div className='discovery_shadow_selected' />
                        <div className='discover_item-title_selected'>
                            <h3>{item.title}</h3>
                            <p>{item.category}</p>
                            <div className='discover_item-rating_selected'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z" fill="#FBC94A" />
                                </svg>
                                <p>{item.rating}</p>
                            </div>
                        </div>

                    </div>
                </div>
            ))
            }
        </section>
    )
}

export default ContentSelected