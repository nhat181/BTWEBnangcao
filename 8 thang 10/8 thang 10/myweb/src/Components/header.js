import React from 'react';
import './header.css';

const Header = () => {
    return (
    <header className="header">
    <div className="video-background">
    <video autoPlay muted loop>
    <source src="/video/y2mate.com - Goku almost goes ultra instinct against broly_1080.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    </div>
    <div className="overlay">
    <div className="content">
    
    <div className="logo">
    <a href="/">Web Goku</a>
    </div>
    
    <nav className="nav">
    <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>

    </nav>
    <div className="cta">
    <a href="#signup" className="btn">Sign Up</a>
    </div>
    <div className='contentgoku'> 
        <h1>
        Chào mừng đến với 
    </h1>
    <h1>
        Trang Web của tôi
    </h1>
    </div>
<div className='logohinhanh'>
<  img src='/img/fb3a30a2e3e8abdcbf63f0aaaadb06e4.png' alt="logo" />
</div>
    </div>
    </div>
    </header>
    );
    };

export default Header;