import React from 'react'
import studyImg from '../images/study.jpg'
import playStoreIcon from '../images/playStoreIcon.png'

const Home = () => {
    return (
        <>
            <section>
                <div id='homeSection'>
                    <div className='content'>
                        <h1 className='secondaryHeading'>
                            Flexagn is a global learning platform that brings kids together through play
                        </h1>
                        <p id='downloadApp'>Download our app
                            <div className='downloadApp'>
                                <div className='downloadAppIcon'>
                                    <img src={playStoreIcon} alt="" />
                                    <div>
                                        <span>GET IT ON</span><br></br>Google Play
                                    </div>
                                </div>
                                <div className='downloadAppIcon'>
                                    <img src={playStoreIcon} alt="" />
                                    <div>
                                        <span>DOWNLOAD ON THE</span><br></br>App Store
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className='contentImg'>
                        <img src={studyImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home