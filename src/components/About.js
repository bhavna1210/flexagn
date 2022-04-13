import React from 'react'
import studyImg from '../images/study.jpg'
import dummyProfile1 from '../images/dummyProfile1.png'
import dummyProfile2 from '../images/dummyProfile2.png'
import dummyProfile3 from '../images/dummyProfile3.png'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaExternalLinkSquareAlt } from 'react-icons/fa'

const About = () => {
    return (
        <>
            <section id='aboutSection'>
                <h1 className='primaryHeading'>About Us</h1>
                <div>
                    <div className='flexJustArround'>
                        <div className='content'>
                            <h2 className='secondaryHeading heading'> Flexagn offers the best in educational apps for children ages 12 and under! </h2><br />
                            <p className='aboutUsPara'>Flexagn offers the best in educational apps for children ages 12 and under! Our fun, child-friendly, interactive educational content fuels their curiosity. It enables them to explore their interests and develop their critical thinking and problem-solving skills through access to various new content every day of the year.Flexagn offers the best in educational apps for children ages 12 and under! Our fun, child-friendly, interactive educational content fuels their curiosity.</p>
                        </div>
                        <div className='aboutUsImg'>
                            <img src={studyImg} alt="" />
                        </div>
                    </div>
                    <div className='aboutSubSection2 flexJustArround'>
                        <div>
                            <img src={dummyProfile1} alt="" />
                            <div className='profileContent'>
                                <b>Alexander Gomez</b>
                                <br />
                                <p>CTO & Founder</p>
                                <a href="https://facebook.com" className='facebook socia-media-icons'><FaFacebookSquare /></a>
                                <a href="https://twitter.com/" className='twitter socia-media-icons'><FaTwitterSquare /></a>
                                <a href="https://www.instagram.com/" className='instagram socia-media-icons'><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/" className='linkedIn socia-media-icons'><FaExternalLinkSquareAlt /></a>
                                <p className='detailedProfileContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nesciunt totam. Natus eum debitis nam ducimus nesciunt dicta cumque asperiores sunt ipsum.
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src={dummyProfile2} alt="" />
                            <div className='profileContent'>
                                <b>Alexander Gomez</b>
                                <br />
                                <p>CTO & Founder</p>
                                <a href="https://facebook.com" className='facebook socia-media-icons'><FaFacebookSquare /></a>
                                <a href="https://twitter.com/" className='twitter socia-media-icons'><FaTwitterSquare /></a>
                                <a href="https://www.instagram.com/" className='instagram socia-media-icons'><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/" className='linkedIn socia-media-icons'><FaExternalLinkSquareAlt /></a>
                                <p className='detailedProfileContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nesciunt totam. Natus eum debitis nam ducimus nesciunt dicta cumque asperiores sunt ipsum.
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src={dummyProfile3} alt="" />
                            <div className='profileContent'>
                                <b>Alexander Gomez</b>
                                <br />
                                <p>CTO & Founder</p>
                                <a href="https://facebook.com" className='facebook socia-media-icons'><FaFacebookSquare /></a>
                                <a href="https://twitter.com/" className='twitter socia-media-icons'><FaTwitterSquare /></a>
                                <a href="https://www.instagram.com/" className='instagram socia-media-icons'><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/" className='linkedIn socia-media-icons'><FaExternalLinkSquareAlt /></a>
                                <p className='detailedProfileContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nesciunt totam. Natus eum debitis nam ducimus nesciunt dicta cumque asperiores sunt ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About