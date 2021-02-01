import React from 'react'
import './style.scss'
import { Switch, Route } from 'react-router-dom'

import Layout from '../../../components/admin/layout/Index'
import DashboardIndex from '../dashboard/Index'
import CategoryIndex from '../category/Index'

import FourOFour from '../fourOfour/Index'

const Index = () => {

    return (
        <div className="master">
            <Layout />
            <div className="main">
                <Switch>
                    <Route exact path="/admin/" component={DashboardIndex} />
                    <Route exact path="/admin/category" component={CategoryIndex} />
                    <Route path="**" component={FourOFour} />
                </Switch>
            </div>
        </div>
    );
}

export default Index;

