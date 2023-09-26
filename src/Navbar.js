
import React from 'react';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#culture">Culture</a></li>
            </ul>
       </nav>
       <div class="container">
            <button class="move-right">Contact us</button>
        </div>
    </div>
  );
}

export default Navbar;
