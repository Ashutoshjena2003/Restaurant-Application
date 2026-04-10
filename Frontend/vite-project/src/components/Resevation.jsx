import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Resevation = () => {

            const [firstName, setFirstName] = useState("");
            const [lastName, setLastName] = useState("");
            const [email, setEmail] = useState("");
            const [phone, setPhone] = useState("");
            const [time, setTime] = useState("");
            const [date, setDate] = useState("");

            const navigate = useNavigate();

            const handleReservation = async (e) => {
                        e.preventDefault();
                        try {
                                    const { data } = await axios.post("http://localhost:4000/api/v1/reservation/send",
                                                {
                                                            firstName,
                                                            lastName,
                                                            email,
                                                            phone,
                                                            date,
                                                            time
                                                },
                                                {
                                                            headers: {
                                                                        "Content-Type": "application/json"
                                                            },
                                                            withCredentials: true
                                                }
                                    );
                                    toast.success(data.message);
                                    setFirstName("");
                                    setLastName("");
                                    setPhone("");
                                    setEmail("")
                                    setDate("");
                                    setTime("");
                                    navigate("/success");

                        }
                        catch (error) {
                                    toast.error(error.response?.data?.message || error.message || "Something went wrong");

                        }


            }

            return (
                        <section className='reservation' id='reservation'>
                                    <div className="container">
                                                <div className="banner">
                                                            <img src="/reservation.png" alt="res" />

                                                </div>
                                                <div className="banner">
                                                            <div className="reservation_form_box">
                                                                        <h1>MAKE A RESERVATION</h1>
                                                                        <p>For Further Questions, Please contact us</p>
                                                                        <form action="">
                                                                                    <div>
                                                                                                <input type="text" placeholder='FirstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                                                                                                <input type="text" placeholder='LastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                                                                    </div>

                                                                                    <div>
                                                                                                <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />

                                                                                                <input type="time" placeholder='time' value={time} onChange={(e) => setTime(e.target.value)} />
                                                                                    </div>

                                                                                    <div>
                                                                                                <input type="email" placeholder='email' className='email_tag' value={email} onChange={(e) => setEmail(e.target.value)} />

                                                                                                <input type="number" placeholder='phone no' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                                                                
                                                                                    </div>

                                                                                    <button onClick={handleReservation} type='submit'>RESERVE NOW
                                                                                                            <span>
                                                                                                                        <HiOutlineArrowNarrowRight />
                                                                                                            </span>
                                                                                                </button>
                                                                        </form>
                                                            </div>
                                                </div>
                                    </div>

                        </section>
            )
}

export default Resevation
