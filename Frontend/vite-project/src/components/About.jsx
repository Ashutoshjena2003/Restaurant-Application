import React from 'react'
import { Link } from 'react-scroll'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
            return (
                        <section className='about' id='about'>
                                    <div className="container">
                                                <div className="banner">
                                                            <div className="top">
                                                                        <h1 className="heading">ABOUT US</h1>
                                                                        <p>The only thing we serious about is food</p>
                                                            </div>
                                                            <p className='mid'>Welcome to HOF RESTRO, where passion meets the plate. Founded on the love for authentic flavors and heartfelt hospitality, we bring you a dining experience that feels both special and familiar.

                                                                        At HOF RESTRO, every dish tells a story — crafted from fresh, locally sourced ingredients and inspired by timeless culinary traditions. Whether you’re here for a casual lunch, a family celebration, or a romantic dinner, our cozy ambiance and attentive service promise to make every visit memorable.

                                                                        Join us, share a table, and discover why food tastes better when it’s made with love.</p>
                                                            <Link to={"/"}>Explore Menu <span>
                                                                        <HiOutlineArrowNarrowRight />
                                                            </span>
                                                            </Link>
                                                </div>
                                                <div className="banner">
                                                            <img src="/about.png" alt="about" />
                                                </div>
                                    </div>

                        </section>
            )
}

export default About
