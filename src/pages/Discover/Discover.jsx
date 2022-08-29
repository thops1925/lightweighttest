import React from 'react'
import { Trending } from '../../components'
import Throwback from '../../components/Throwback/Throwback'
import './Discover.scss'
import { trending } from '../../constant'

const Discover = () => (
    <section id='Discover' className='discover_container'>
        <div className='discover_header'>
            <h2>Trending <span>this week</span></h2>
        </div>
        <Trending data={trending} />
        <div className='discover_header'>
            <h2>Throwback Anime!</h2>
        </div>
        <Throwback />
    </section>
)


export default Discover