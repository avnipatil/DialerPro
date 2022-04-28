import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='layout-footer'>
            <div className='layout-spacing container'>
                <div className='d-flex row'>
                    <div className='col-lg-6 col-sm-12'>
                        <div>Copyright @2022 <b>Leadtronics</b> All rights Reserved</div>
                    </div>
                    <div className='Responsive-links col-lg-6 col-sm-12'>
                        <Link to="/" className='text-white FooterLinks'>Home</Link>
                        <Link to="/" className='text-white FooterLinks'>Terms and Conditions</Link>
                        <Link to="/" className='text-white FooterLinks'>Privacy Policy</Link>
                        <Link to="/" className='text-white FooterLinks'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
