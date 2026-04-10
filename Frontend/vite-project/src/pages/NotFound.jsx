import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

export default function NotFound() {
  return (
    <>
      
      <section className='notFound' >
        <div className="container">
        <img src="/notFound.svg" alt="notfound" />
        <h1>OOPS LOOK LIKE SOME WENT WRONG, PLEASE TRY AGAIN</h1>
        <p>We can't seem to find the page you are looking for</p>
        <Link to={'/'}>Back to Home Page{" "}
        <span>
          <HiOutlineArrowNarrowRight />
          
          </span></Link>
        </div>
      </section>
    </>
  )
}
