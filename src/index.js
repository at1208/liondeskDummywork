import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './components/app';
import Login from './components/Login/login'


ReactDOM.render(
   <BrowserRouter>
     <Route path='/' component={App} />
     <Route path='/login' component={Login} />
   </BrowserRouter>, document.getElementById('root'));
