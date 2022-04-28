import React, { useEffect, useState } from 'react'
import './Components.css'
import { Dropdown } from 'react-bootstrap'
import profile from '../assets/images/profile.png'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const Header = () => {
    const User = JSON.parse(localStorage.getItem('username'));
    const navigate = useNavigate();
    const LogOut = (data) => {
        const Token = localStorage.getItem('token', JSON.stringify(data.token));
        localStorage.removeItem("token", JSON.stringify(data.token));
        navigate('/login');
    }
    const StatusChange = (e) => {
        swal({
            position:'top',
            title: `Your status is ${e.target.value}`,
        }) 
    }
  
    return (
        <div className='layout-bg'>
            <div className='layout-Topbar container d-flex'>
                <h2>Dialer</h2>
                <div className='py-0 d-flex align-items-center'>
                    <div className='me-3 d-flex align-items-baseline'>
                        <div className='text-white username'>Status :</div>
                        <select onChange={StatusChange} name="Status" id="Status" className='selectStatus'>
                            <option defaultValue value="Online" style={{color:"black"}}>Online</option>
                            <option value="Offline" style={{color:"black"}}>Offline</option>
                            <option value="Break" style={{color:"black"}}>Break</option>
                        </select>

                    </div>
                    <img src={profile} className='profile-style me-2' width="45px" alt="profile"></img>
                    <div className='text-white me-3 username'>{User}</div>
                    <Dropdown align="start">
                        <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                            <span className="text-white" aria-hidden="true" style={{ fontSize: "20px" }}><FaBars /></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item ><div onClick={LogOut}>Sign Out</div></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
        </div>
    )
}
export default Header