import React from 'react'
import {FaX, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6"

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className='text-center mt-36'>
      <ul className='flex items-center justify-center'>
        <li>
          <FaX className='mr-3' size={25} />
        </li>
        <li>
          <FaFacebook className='mr-3' size={25} />
        </li>
        <li>
          <FaInstagram className='mr-3' size={25} />
          </li>
        <li>
          <FaTelegram className='mr-3'  size={25}/>
        </li>
      </ul>
      <p className='md:text-xl my-3'>©{date} All right reserved</p>
    </footer>
  )
}

export default Footer