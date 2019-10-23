import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './components/app';
import Login from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard'


ReactDOM.render(
   <BrowserRouter>
     <Route path='/' exact component={App} />
     <Route path='/login' component={Login} />
     <Route path='/dashboard'   component={Dashboard} />
   </BrowserRouter>, document.getElementById('root'));
