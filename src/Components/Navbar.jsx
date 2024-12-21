import React from 'react'
import { useState } from 'react';
import Cart from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, Controller } from "react-hook-form"

const Navbar = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            select: {},
        },
    })
    const onSubmit = (data) => console.log(data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>

                <div className='flex justify-between bg-violet-50 '>
                    <div>

                        <div className=' mt-2 '>
                            <Button variant='outline-secondary' onClick={handleShow}>
                                <img src='img/setting.png' className='w-6 mix-blend-darken ssm:w-5  sm:w-5 md:w-8 lg:8  ' />
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} placement="start">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title >Setting </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body >
                                    <div className='p-1 cursor-pointer border border-gray-500 rounded-xl items-center flex gap-3'>
                                        <FontAwesomeIcon icon={faUser} className='border border-black p-1 rounded-xl' />     View your Profile
                                    </div>

                                    <form className=' text-lg  p-2'>
                                        <div>
                                            <input type='checkbox' />
                                            <label className='px-2'> EarPhone</label>
                                        </div>
                                        <div>
                                            <input type='checkbox' />
                                            <label className='px-2'> HeadPhone</label>
                                        </div>
                                        <div>
                                            <input type='checkbox' />
                                            <label className='px-2'> SmartWatch  </label>
                                        </div>
                                        <div>
                                            <input type='checkbox' />
                                            <label className='px-2'>Wireless </label>
                                        </div>
                                    </form>
                                </Offcanvas.Body>
                                <div>
                                    <p className='font-semibold m-0 '> Contact us at </p>
                                    <ul className='flex gap-4'>
                                        <li>
                                            <img className='w-5 cursor-pointer' src='https://tse1.mm.bing.net/th/id/OIP.Rwdx3-MJLtAa17YZIFMunAAAAA?rs=1&pid=ImgDetMain' />
                                        </li>
                                        <li>
                                            <img className='w-5 cursor-pointer' src='https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Instagram-logo-transparent-PNG.png' />
                                        </li>
                                        <li>
                                            <img className='w-5 cursor-pointer' src='https://th.bing.com/th/id/R.8f265a94a8fd9b0cb24488678ab6d648?rik=79r6hq6icjgjRg&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f07%2fyoutube_black_logo.jpg&ehk=PyW73Rx8P9vyochnjVRFEEH0HO8s8Xzgt7XVUA3igrE%3d&risl=&pid=ImgRaw&r=0' />
                                        </li>
                                        <li>
                                            <a href='https://www.linkedin.com/in/laxman-male-0716b62a1/' target='blank'>
                                                <img className='w-5 cursor-pointer' src='https://tse3.mm.bing.net/th/id/OIP.DtzCFTem9bd_3GlVROBlRgHaHa?rs=1&pid=ImgDetMain' />
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </Offcanvas>
                        </div>
                    </div>
                    <ul className='flex gap-5 items-center px-5 py-2'>

                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'>

                            <FontAwesomeIcon icon={faHouse} />
                        </li>
                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'>
                            <FontAwesomeIcon icon={faGlobe} />
                        </li>
                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'>
                            <FontAwesomeIcon icon={faUserNurse} />
                        </li>
                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'>
                            <FontAwesomeIcon icon={faPhone} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar