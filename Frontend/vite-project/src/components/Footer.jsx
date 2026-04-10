import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

            const navigate = useNavigate();

            const handleContactClick = () => {
                        navigate('/customer-service'); // replace with your actual route if different
            };
            return (
                        <footer>
                                    <div className="container">
                                                <div className="banner">
                                                            <div className="left">House of Flavors</div>
                                                            <div className="right">

                                                                        <p> <MdLocationOn /> Jagamara, Iter Square, Bhubaneswar</p>
                                                                        <p>Open: 12:00 PM - 12:00 AM</p>
                                                            </div>
                                                </div>

                                                <div className="banner">
                                                            <div className="left">
                                                                        <p>This app was Developed by Ashutosh</p>
                                                            </div>
                                                            <div className="right">
                                                                        <p>All Rights Reserved by Ashutosh</p>
                                                                        <button
                                                                                    onClick={handleContactClick}
                                                                                    className="footer-button"
                                                                        >
                                                                                    Contact Us
                                                                        </button>
                                                            </div>
                                                </div>
                                    </div>

                        </footer>
            )
}

export default Footer
