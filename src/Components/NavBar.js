import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_dehaze, ic_close } from 'react-icons-kit/md';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(true);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY < 200;
            if (isTop !== true) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        })
    }, [])


    return (
        <div className={scrolled ? "nav-bar" : "nav-bar scrolled"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-light rounded-circle shadow-none float-right d-lg-none" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ?
                                <Icon icon={ic_close} size={25} />
                                :
                                <Icon icon={ic_dehaze} size={25} />
                            }
                        </button>

                        {/* Mobile Menu */}
                        <div className={isOpen ? "menu mobile-menu d-lg-none open-sidebar" : "menu mobile-menu d-lg-none hide-sidebar"}>
                            <ul>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/">home</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/category">categorie's</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/album">album's</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/singer">singer</NavLink></li>
                                <li><NavLink activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/account">mamun</NavLink></li>
                            </ul>
                        </div>

                        {/* Desktop Menu */}
                        <div className="menu desktop-menu d-none d-lg-block text-right">
                            <ul>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/">home</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/category">categorie's</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/album">album's</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/singer">singer</NavLink></li>
                                <li><NavLink activeStyle={{ color: "rgb(214, 69, 86)" }} activeClassName="isActive" to="/account">mamun</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;