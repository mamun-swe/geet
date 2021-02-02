import React from 'react'
import './style.scss'
import { Switch, Route } from 'react-router-dom'

import Layout from '../../../components/admin/layout/Index'
import DashboardIndex from '../dashboard/Index'
import CategoryIndex from '../category/Index'
import AlbumIndex from '../album/Index'
import SongIndex from '../song/Index'
import SingerIndex from '../singer/Index'

import FourOFour from '../fourOfour/Index'

const Index = () => {

    return (
        <div className="master">
            <Layout />
            <div className="main">
                <Switch>
                    <Route exact path="/admin/" component={DashboardIndex} />
                    <Route exact path="/admin/category" component={CategoryIndex} />
                    <Route exact path="/admin/album" component={AlbumIndex} />
                    <Route exact path="/admin/song" component={SongIndex} />
                    <Route exact path="/admin/singer" component={SingerIndex} />
                    <Route path="**" component={FourOFour} />
                </Switch>
            </div>
        </div>
    );
}

export default Index;

