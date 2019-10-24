import React, { Component } from 'react';
import './contact.css'
import { Icon } from 'antd'

class Contact extends Component {

   state = {
     addContact: false,
     allContact: false,
     updateContact: false,
     deleteContact: false
   }


  render(){
    console.log(this.state.addContact)
        console.log(this.state.allContact)
            console.log(this.state.updateContact)
                console.log(this.state.deleteContact)
    return <div className='container'>
   <h1 className='text-center'>Contacts</h1>

      <div className='container text-center'>
      <button className='btn   e1 shadow'><Icon type="user-add" className='e2' onClick={() => this.setState({ addContact: true, allContact: false,updateContact: false,  deleteContact: false })}/>Add Contact</button>
      <button className='btn   e1 shadow'><Icon type="contacts" className='e3' onClick={() => this.setState({ addContact: false, allContact: true,updateContact: false,  deleteContact: false })}/>All Contact</button>
      <button className='btn   e1 shadow'><Icon type="edit"     className='e4' onClick={() => this.setState({ addContact: false, allContact: false,updateContact: true,  deleteContact: false })}/>Update Contact</button>
      <button className='btn   e1 shadow'><Icon type="delete"   className='e5' onClick={() => this.setState({ addContact: false, allContact: false,updateContact: false, deleteContact: true })}/>Delete Contact</button>
      </div>

      <div className='container'>
      <h1 className='text-center'>Add Contact</h1>
      </div>

    </div>
  }
}
export default Contact;
