import React, { Component } from "react";
import Sidebar from "react-sidebar";
import './sidebar.css'


class Sidemenu extends React.Component {

   state = {
      sidebarOpen: true
    };



  render() {
    return (
      <Sidebar
        sidebar={
          <>
          <div className='d1 container'> Dashboard </div>

          <div>
          <button className='btn btn-block btn-info'>Contacts</button>
          </div>
          </>
        }
        open={true}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
        sidebar: {
           background: "white",
           zIndex: 10,
           position: "absolute",
           top: 106,
           bottom: 0,
           transition: "transform .3s ease-out",
           WebkitTransition: "-webkit-transform .3s ease-out",
           willChange: "transform",
           overflowY: "auto"
          },
        root: {
           position: "absolute",
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           overflow: "hidden"
         },
       content: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          transition: "left .3s ease-out, right .3s ease-out"
        },
      overlay: {
          zIndex: 1,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          visibility: "hidden",
          transition: "opacity .3s ease-out, visibility .3s ease-out",
          backgroundColor: "rgba(0,0,0,0)"
      },
    dragHandle: {
          zIndex: 1,
          position: "fixed",
          top: 0,
          bottom: 0
      }

       }}
      >


      </Sidebar>
    );
  }
}

export default Sidemenu;
