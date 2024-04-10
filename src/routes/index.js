import React from "react";
import { Switch, Route } from 'react-router-dom'

import MyRoute from './MyRoute'
import Task from '../pages/Task'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Contact from "../pages/Contact";
import Page404 from '../pages/Page404'

export default function Routes(){
    return (
        <Switch>
            <MyRoute exact path="/" component={Login} />
            <MyRoute exact path="/dashboard" component={Dashboard} />
            <MyRoute exact path="/task" component={Task} />
            <MyRoute exact path="/contacts" component={Contact} />
            <MyRoute path="*" component={Page404} />
        </Switch>
    );
}
