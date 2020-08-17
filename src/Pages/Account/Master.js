import React, { useState } from 'react';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_settings, ic_close } from 'react-icons-kit/md';

import SideMenu from '../../Components/AccountSideMenu';
import AccountIndex from '../../Pages/Account/Index';
import AccountHistory from '../../Pages/Account/History';
import AccountProfile from '../../Pages/Account/Profile';

const Master = () => {
    const [show, setShow] = useState(false);

    const openMenu = () => {
        setShow(true);
    }

    const hideMenu = () => {
        setShow(false);
    }

    return (
        <div className="account">
            <div className="d-flex">
                <div className="side-menu">
                    <SideMenu show={show} />
                </div>

                <div className="main flex-fill">
                    <Switch>
                        <Route exact path="/account/" component={AccountIndex} />
                        <Route exact path="/account/history" component={AccountHistory} />
                        <Route exact path="/account/profile" component={AccountProfile} />
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