import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Remove if you're not using React Router
import { menuItems } from '../constant/menu';

const Header = ({ title, subTitle, image, active }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header>
            <div className='w-full pt-[72px] pb-[200px] max-h-[530px] bg-cover bg-left mb-16' style={{ backgroundImage: `url(${image})` }}>
                <div className='bg-purple-main h-[70px] flex items-center justify-between rounded-[10px] w-4/5 mx-auto max-w-[1250px] px-7 mb-20'>
                    <div className='w-[50px] h-[50px]'>
                        <img src='./assets/images/svg/logo_uni.svg' alt='لوگو' className='w-full h-full' />
                    </div>
                    <nav>
                        <ul className='flex items-center gap-[70px] relative'>
                            {menuItems.map((item, index) => (
                                <li key={index} className='text-base xl:text-xl text-white relative'>
                                    {item.dropdown ? (
                                        <div
                                            className='h-[70px] flex items-center justify-center'
                                            onMouseEnter={() => setShowDropdown(true)}
                                            onMouseLeave={() => setShowDropdown(false)}
                                        >
                                            <button>{item.text}</button>
                                            {showDropdown && (
                                                <ul className='absolute top-full right-0 mt-[-12px] bg-purple-main p-3 rounded-lg shadow-md text-black w-36'>
                                                    {item.dropdown.map((dropdownItem, index) => (
                                                        <Link to={dropdownItem.link} key={index} className='w-full'>
                                                            <li className='px-4 py-2 text-white transform transition-all duration-200 hover:scale-125 text-sm xl:text-base w-full'>
                                                                {dropdownItem.text}
                                                            </li>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link to={item.link}>
                                            <li
                                                className={`text-base xl:text-xl ${active === item.id ? 'text-green-main' : 'text-white'}`}
                                            >
                                                {item.text}
                                            </li>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='w-4/5 mx-auto max-w-[1250px]'>
                    <h1 className='text-4xl xl:text-5xl text-black font-bold mb-4'>{title}</h1>
                    {
                        subTitle !== '' &&
                        <span className='text-xl xl:text-3xl text-black'>{subTitle}</span>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
