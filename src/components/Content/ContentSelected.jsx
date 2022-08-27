import React, { useEffect, useState } from 'react'
import { selectedEpisode } from '../../constant'
import './Content.scss'

const ContentSelected = ({ trendingData }) => {

    const { episode } = selectedEpisode
    const [{ image }] = episode
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const myInterval = setInterval(() => {
            setCounter(() => counter + 1);
        }, 1000)
        if (counter >= image.length) setCounter(0);
        return () => clearInterval(myInterval);
    }, [counter, image.length])
    return (
        <section className='selected_container'>

            <div className='discover_grid_selected_selected'>
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
                {trendingData.title === selectedEpisode.title && (
                    <div className='discover_selected-description'>
                        {selectedEpisode.description}
                    </div>)}
            </div>
            <div className='episode_container'>
                {trendingData.title === selectedEpisode.title && [selectedEpisode].map((item, index) => (
                    <div key={index} className='episode_header'>
                        <div className='episode_title'>
                            <p className='episode_title-header'>Episode</p>
                            <p className='episode_title-header-tile'>{item.title}</p>
                        </div>
                        <div>
                            {item.episode.map((epi, index) => (
                                <div key={index} className='epi_container'>
                                    <div className='epi_image'>
                                        <img src={epi.image[counter]} alt={epi.title} />

                                    </div>
                                    <div className='epi_text'>
                                        <p className='epi_title'>{epi.title}</p>
                                        <p className='epi_category'>{epi.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ContentSelected