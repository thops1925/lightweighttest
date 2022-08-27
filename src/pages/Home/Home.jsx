import React from 'react'
import './Home.scss'
import { homeContent } from '../../constant'
import { BottomNav } from '../../components'
const Home = () => {
    return (
        <section id='Home' className='home_container'>
            <div className='shadow_container'>
                <div className='left_shadow' >
                    <div className='home_container-title'>
                        <div className='home_content'>
                            <h2 className='home_title'>
                                {homeContent.title}
                            </h2>
                            <div className='home_category_desc'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z" fill="#FBC94A" />
                                </svg>
                                <span>5.0</span>
                                <p>{homeContent.category}</p>
                            </div>

                            <p className='category_desc'>{homeContent.description}</p>
                            <div className='home_category'>
                            </div>
                            <div className='watch_flexCenter'>
                                <div className='home_watch_button'>
                                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4125 10.0027L1.60538 18.5408C1.5144 18.6013 1.4087 18.636 1.29954 18.6412C1.19038 18.6465 1.08185 18.622 0.985503 18.5704C0.889158 18.5188 0.808608 18.4421 0.752433 18.3483C0.696257 18.2546 0.66656 18.1474 0.666504 18.0381V0.961918C0.66656 0.852633 0.696257 0.745411 0.752433 0.65167C0.808608 0.557929 0.889158 0.48118 0.985503 0.429598C1.08185 0.378015 1.19038 0.353531 1.29954 0.358753C1.4087 0.363975 1.5144 0.398708 1.60538 0.459251L14.4125 8.99733C14.4952 9.05251 14.5631 9.12726 14.61 9.21494C14.6569 9.30263 14.6815 9.40055 14.6815 9.5C14.6815 9.59945 14.6569 9.69737 14.61 9.78506C14.5631 9.87274 14.4952 9.94749 14.4125 10.0027Z" fill="white" />
                                    </svg>
                                    <div className='home_button'>Watch Now!</div>
                                </div>
                                <div className='watch_heart'>
                                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5011 2.09513C14.1438 -0.2775 18.2275 -0.19875 20.7734 2.35163C23.3181 4.90313 23.4059 8.96663 21.0389 11.6171L11.4989 21.1706L1.96113 11.6171C-0.405868 8.96663 -0.316993 4.89638 2.22663 2.35163C4.77476 -0.195375 8.85063 -0.280875 11.5011 2.09513V2.09513Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right_shadow' ></div>
            </div>
            <BottomNav />
        </section>
    )
}

export default Home