import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FiArrowDownRight } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#1d2835]'>
            <footer className="lg:max-w-6xl md:max-w-screen-sm max-w-[300px] lg:w-full mx-auto pb-10 pt-20">
                <div className='footer text-white '>
                    <aside className=' space-y-3 w-[280px] justify-center lg:justify-start mx-auto '>
                        <div className='w-[250px] flex gap-2 items-center'>
                            <img className='w-[35px]' src="https://i.ibb.co/tJw0FRY/image-removebg-preview-2.png" alt="" />
                            <p className="text-primary text-2xl font-semibold">AsianEscapeHub</p>
                        </div>
                        <p className=" md:block">Your Gateway to Asian Adventure!Dive into the heart of Asia's rich cultural tapestry. From serene temples nestled amidst lush greenery to bustling markets brimming with tantalizing flavors.</p>
                        <div className='flex gap-6 text-xl'>
                            <a className="link link-hover"><FaInstagram /></a>
                            <a className="link link-hover"><FaFacebook></FaFacebook></a>
                            <a className="link link-hover"><FaTwitter></FaTwitter></a>
                        </div>
                    </aside>
                    <div className=' flex-col hidden  lg:flex mx-auto w-[200px]  items-center md:items-start '>
                        <h6 className="  text-2xl mb-3  text-white">Country</h6>
                        <p><a className="link link-hover">Bangladesh</a></p>
                        <p><a className="link link-hover">Thailand</a></p>
                        <p><a className="link link-hover">Indonesia</a></p>
                        <p><a className="link link-hover">Malaysia</a></p>
                        <p><a className="link link-hover">Vietnam</a></p>
                        <p><a className="link link-hover">Cambodia</a></p>
                    </div>
                    <div className='flex flex-col mx-auto   items-center md:items-start w-[250px]'>
                        <h6 className=" text-2xl mb-3">Newsletter</h6>
                        <p>Subscribe our newsletter to get our latest update & news.</p>
                        <div className='flex mt-12'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '100%', maxWidth: '200px' }, // Adjusted width for better mobile layout
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    label={'Your Email'}
                                    id="Email"
                                    variant="outlined"
                                    size="small"
                                    sx={
                                        {
                                            '& .MuiInputLabel-root': {
                                                color: '#DDDDDD',
                                                fontSize: '12px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                top: '10%',
                                                '&.Mui-focused': {
                                                    color: 'black',
                                                    backgroundColor: '#5BBC04',
                                                    padding: '2px 8px 2px 8px',
                                                    borderRadius: '5px',
                                                    fontWeight: 'bold',
                                                },
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&:hover fieldset': {
                                                    border: 'none',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: 'none',
                                                },
                                                '& input ': {
                                                    border: '1px solid white',
                                                    borderRight: 'none',
                                                    borderRightRadius: '0px',
                                                    borderTopLeftRadius: '5px',
                                                    borderBottomLeftRadius: '5px',
                                                    color: 'white',
                                                },
                                            },
                                        }
                                    }
                                />
                            </Box>
                            <button><FiArrowDownRight className='bg-primary rounded-r-[5px] text-[43px] p-2' /></button>
                        </div>
                    </div>
                    <div className='flex md:hidden lg:flex flex-col mx-auto w-[200px]  items-center md:items-start'>
                        <h6 className=" text-2xl mb-3">Address</h6>
                        <p>info@mkmunna.com</p>
                        <p>+2535445(546)6</p>
                        <p>Lewa House Pimibi Ltd.</p>
                        <p>Po. Box 760</p>
                        <p>Isiolo</p>
                        <p>60300</p>
                    </div>
                    
                </div>
            </footer>
            <p className='text-white text-center mt-10 pb-10 text-[12px]'>Copyright@2024. All rights reserved</p>

        </div>
    );
};

export default Footer;
