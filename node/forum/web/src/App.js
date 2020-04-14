import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/index';
import Topic from './components/Topic/index';
import Register from './components/Register/index';
import Login from './components/Login/index';
import NotFound from './components/NotFound/index';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/topic" component={Topic} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;