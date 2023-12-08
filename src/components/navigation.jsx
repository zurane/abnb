import React from 'react';
import logo from '../assets/airbnb.svg';

// Navigation Component

export default function Navigation() {
    return (
        <>
            <header>
                <nav className="Navigation">
                    <img src={logo} alt="airbnb_logo" />
                    <form className='search__bar'>
                        <input type="search" placeholder='Where are you going?' />
                        <button type="submit"><span className="material-symbols-outlined">search</span></button>
                    </form>
                    <div className='profile__icons' id='dropdown-btn'>
                        <a href="/"><span className="material-symbols-outlined">menu</span></a>
                        <a href="/"><span className="material-symbols-outlined">account_circle</span></a>
                    </div>

                </nav>
            </header>
        </>
    )
}
