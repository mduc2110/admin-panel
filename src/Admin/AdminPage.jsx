import React from 'react'
import './adminPage.css'
import Header from './Header'
import SideBar from './SideBar'
import {Switch, Route, Router} from 'react-router-dom'
import ProductAdmin from '../components/Admin/ProductAdmin'
import Dashboard from '../components/Admin/Dashboard'
function AdminPage() {
    return (
        <div className="adminPage">
            <SideBar/>
            <div className="body-wrapper">
                <Header/>
                <div className="main-panel">
                    <Switch>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/product" component={ProductAdmin}/>
                        <Route exact path="/topics"/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
