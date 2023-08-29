import React from 'react'
import notFoundImg from '../../assets/not found.svg'
import Navbar from '../Navbar/Navbar.jsx'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Navbar />

    <div className='text-center'>
      <img src={notFoundImg}  className={styles.image} alt="404 error" />
    </div>
    </>
  )
}
