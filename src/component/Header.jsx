import React from 'react';
import Logo from '../assets/imag/DreamShaper_v7_Create_a_mesmerizing_3D_cosmic_galaxy_logo_that_0 (1).jpg';
import '../assets/css/btn.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const car = ['Home', 'About', 'Contact'];
    return (
        <div className="main_head">
            <div className="logo_head">
                <img className="logo_image" src={Logo} alt="Logo" />
                <h2 className="logo_text">LOGO</h2>
            </div>
            <ul className="ul">
                {car.map((item, i) => (
                    <li  key={i}>
                        <Link to={`/${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
