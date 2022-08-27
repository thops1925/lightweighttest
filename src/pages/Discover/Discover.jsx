import React, { useEffect, useState } from 'react'
import { Trending } from '../../components'
import Throwback from '../../components/Throwback/Throwback'
import './Discover.scss'
import { trending } from '../../constant'


const Discover = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(trending);
    }, []);


    return (
        <section id='Discover' className='discover_container'>
            <div className='discover_header'>
                <h2>Trending <span>this week</span></h2>
            </div>
            <Trending data={data} />
            <div className='discover_header'>
                <h2>Throwback Anime!</h2>
            </div>
            <Throwback />
        </section>
    )
}


export default Discover