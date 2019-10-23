import React, { Component } from 'react';
import './contact.css'
import { Icon } from 'antd'

class Contact extends Component {
  render(){
    return <div className='container'>
   <h1 className='text-center'>Contacts</h1>

      <div className='container text-center'>
      <button className='btn   e1 shadow'><Icon type="user-add" className='e2'/>Add Contact</button>
      <button className='btn   e1 shadow'><Icon type="contacts" className='e3'/>All Contact</button>
      <button className='btn   e1 shadow'><Icon type="edit"     className='e4'/>Update Contact</button>
      <button className='btn   e1 shadow'><Icon type="delete"   className='e5'/>Delete Contact</button>
      </div>
    </div>
  }
}
export default Contact;
