import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Success() {

  const [countdown, setCountdown] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {

    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }

        return preCount -1;
      });
    }, 1000)

    return () => clearInterval(timeoutId);
  }, [navigate]);
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/sandwich.png" alt="" />
        <h1>Redirecting to Home Page in {countdown} seconds. </h1>
        <Link to={'/'}>Back to Home Page <HiOutlineArrowNarrowRight />
                  </Link>
      </div>
      
    </section>
  )
}
