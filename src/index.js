import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './components/app';
import Login from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard'
import Contact from './components/Dashboard/contact'


ReactDOM.render(
   <BrowserRouter>
     <Route path='/' exact component={App} />
     <Route path='/login' component={Login} />
     <Route path='/dashboard'   component={Dashboard} />
     <Route path='/dashboard/contact'   component={Contact} />
   </BrowserRouter>, document.getElementById('root'));
