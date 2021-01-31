import React, { useState } from 'react'
import './style.scss'
import { Switch, Route } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { ic_settings, ic_close } from 'react-icons-kit/md'

import SideMenu from '../../components/account/sidemenu/Index'
import Dashboard from './dashboard/Index'
import HistoryIndex from './history/Index'
import ProfileIndex from './profile/Index'

const Master = () => {
    const [show, setShow] = useState(false)

    const openMenu = () => setShow(true)
    const hideMenu = () => setShow(false)

    return (
        <div className="account">
            <div className="d-flex">
                <div className="side-menu">
                    <SideMenu show={show} />
                </div>

                <div className="main flex-fill">
                    <Switch>
                        <Route exact path="/account/" component={Dashboard} />
                        <Route exact path="/account/history" component={HistoryIndex} />
                        <Route exact path="/account/profile" component={ProfileIndex} />
                    </Switch>
                </div>
            </div>

            {show ? (
                <button type="button" className="btn shadow rounded-circle px-2 bg-white d-lg-none setting-btn" onClick={hideMenu}>
                    <Icon icon={ic_close} size={25} className="text-muted" />
                </button>
            ) :
                <button type="button" className="btn shadow rounded-circle px-2 bg-white d-lg-none setting-btn" onClick={openMenu}>
                    <Icon icon={ic_settings} size={25} className="text-muted" />
                </button>
            }
        </div>
    );
};

export default Master;