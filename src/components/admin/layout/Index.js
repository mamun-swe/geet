import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import api from '../../../api'
import { NavLink, useHistory } from 'react-router-dom'
import Icon from 'react-icons-kit'
import {
    ic_dashboard,
    ic_library_books,
    ic_library_music,
    ic_queue_music,
    ic_people,
    // ic_language,
    // ic_account_circle,
    // ic_keyboard_arrow_right
} from 'react-icons-kit/md'
import { standby } from 'react-icons-kit/iconic'

import Navbar from '../navbar/Index'
import { handleError } from '../../../utils/Error'

const Layout = () => {
    const history = useHistory()
    const [show, setShow] = useState(false)
    // const [isMenu, setMenu] = useState(false)
    const [isLogout, setLogout] = useState(false)
    const [notifications, setNotifications] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        // Fetch Notifications
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${api}users`)
                if (response.status === 200) {
                    setNotifications(response.data)
                    setMessages(response.data)
                }
            } catch (error) {
                if (error) {
                    handleError(error)
                }
            }
        }

        fetchNotifications()
    }, [])

    // Toggle menu
    // const toggleMenu = event => {
    //     let current = event.target.getAttribute("data-value")

    //     if (isMenu === current) {
    //         setMenu(false)
    //     } else {
    //         setMenu(current)
    //     }
    // }

    // Logout
    const doLogout = () => {
        setLogout(true)
        setTimeout(() => {
            setLogout(false)
            localStorage.clear()
            history.push('/')
        }, 2000)
    }

    return (
        <div className="layout">

            {/* Navbar */}
            <div className="navbar-container shadow-sm">
                {notifications && messages ?
                    <Navbar notifications={notifications} messages={messages} toggle={() => setShow(!show)} />
                    : null}
            </div>

            {/* Sidebar */}
            <div className="sidebar-container">
                <div className={show ? "sidebar shadow open-sidebar" : "sidebar shadow"}>
                    <ul>
                        {/* Dashboard */}
                        <li>
                            <NavLink
                                exact
                                to="/admin/"
                                activeClassName="isActive"
                                type="button"
                                className="btn shadow-none"
                            ><Icon icon={ic_dashboard} size={20} />Dashboard</NavLink>
                        </li>

                        {/* category */}
                        <li>
                            <NavLink
                                exact
                                to="/admin/category"
                                activeClassName="isActive"
                                type="button"
                                className="btn shadow-none"
                            ><Icon icon={ic_library_books} size={20} />Category</NavLink>
                        </li>

                        {/* Albums */}
                        <li>
                            <NavLink
                                exact
                                to="/admin/album"
                                activeClassName="isActive"
                                type="button"
                                className="btn shadow-none"
                            ><Icon icon={ic_library_music} size={20} />Albums</NavLink>
                        </li>

                        {/* Songs */}
                        <li>
                            <NavLink
                                exact
                                to="/admin/song"
                                activeClassName="isActive"
                                type="button"
                                className="btn shadow-none"
                            ><Icon icon={ic_queue_music} size={20} />Songs</NavLink>
                        </li>

                        {/* Singers */}
                        <li>
                            <NavLink
                                exact
                                to="/admin/singer"
                                activeClassName="isActive"
                                type="button"
                                className="btn shadow-none"
                            ><Icon icon={ic_people} size={20} />Singer</NavLink>
                        </li>
                        {/* Accounts */}
                        {/* <li>
                            <div className="sidebar-dropdown-container">
                                <button
                                    type="button"
                                    className="btn shadow-none"
                                    onClick={toggleMenu}
                                    data-value="accounts"
                                >
                                    <Icon icon={ic_account_circle} size={20} />Accounts
                                <Icon icon={ic_keyboard_arrow_right} size={25} className={isMenu === 'accounts' ? "arrow down" : "arrow"} />
                                </button>

                                <div className={isMenu === 'accounts' ? "sidebar-dropdown-menu" : "sidebar-dropdown-menu menu-hide"}>
                                    <NavLink
                                        exact
                                        to="/admin/theme"
                                        activeClassName="isActive"
                                        type="button"
                                        className="btn shadow-none"
                                    >Account</NavLink>
                                    <NavLink
                                        exact
                                        to="/admin/theme"
                                        activeClassName="isActive"
                                        type="button"
                                        className="btn shadow-none"
                                    >Transaction</NavLink>
                                    <NavLink
                                        exact
                                        to="/admin/theme"
                                        activeClassName="isActive"
                                        type="button"
                                        className="btn shadow-none"
                                    >Income</NavLink>
                                    <NavLink
                                        exact
                                        to="/admin/theme"
                                        activeClassName="isActive"
                                        type="button"
                                        className="btn shadow-none"
                                    >Expense</NavLink>
                                    <NavLink
                                        exact
                                        to="/admin/theme"
                                        activeClassName="isActive"
                                        type="button"
                                        className="btn shadow-none"
                                    >Wallet management</NavLink>
                                </div>
                            </div>
                        </li> */}

                        {/* Logout */}
                        <li>
                            <button
                                type="button"
                                className="btn shadow-none"
                                onClick={doLogout}
                                disabled={isLogout}
                            >
                                <Icon icon={standby} size={18} />
                                {isLogout ? <span>Logging out...</span> : <span>Logout</span>}
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Layout;