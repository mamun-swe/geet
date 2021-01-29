import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_history, ic_person, ic_power_settings_new } from 'react-icons-kit/md';
import { undo } from 'react-icons-kit/iconic/undo';

const AccountSIdeMenu = (props) => {
    return (
        <div className={props.show ? "menu shadow open-menu" : "menu shadow"}>
            <NavLink exact to="/account/" activeClassName="is-Active"><Icon icon={undo} size={20} className="mr-2" />recently played</NavLink>
            <NavLink exact to="/account/history" activeClassName="is-Active"><Icon icon={ic_history} size={20} className="mr-2" />history</NavLink>
            <NavLink exact to="/account/profile" activeClassName="is-Active"><Icon icon={ic_person} size={20} className="mr-2" />profile</NavLink>
            <NavLink exact to="/" activeClassName="is-Active"><Icon icon={ic_power_settings_new} size={20} className="mr-2" />logout</NavLink>
        </div>
    );
};

export default AccountSIdeMenu;