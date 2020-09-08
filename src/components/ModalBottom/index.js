import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import closeIcon from "../../assets/exit-black.svg";

import './styles.css';

// Don't forget to bind to app element
Modal.setAppElement('#root');

const modalStyle ={
  modal:{
    overlay:{
      backgroundColor: 'rgba(27, 35, 39, 0.9)'    
    },
    content: {
      top: 'auto',
      left: '0',
      right: '0',
      bottom: '0',
      padding: '0',
      backgroundColor: 'white',
      boxShadow: '0px 2px 8px rgba(35, 31, 32, 0.16)',
      borderRadius: '8px 8px 0 0'
    }
  },
  content:{
    textAlign: 'center'
  },
  exit:{
    position: 'absolute',
    width: '24px',
    height: '24px',
    right: '16px',
    top: '16px'
  },
  buttonArea:{
    marginTop: "3%",
    marginBottom: "3%",
    width: "100%",
    display: "flex",  
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  downloadButton:{    
  },
  closeButton:{
    width: '100%',
    color: 'white',
    backgroundColor: 'blue',
    fontWeight: '600',
    fontSize: '16px',
    padding: '7px',
    outline: '0',
    border: '0',
    cursor: 'pointer'
  },
}

export default function ModalBottom({isOpen, setIsOpen}){

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      style={modalStyle.modal}
    >
      <a style={modalStyle.exit} onClick={() => setIsOpen(false)} >
        <img src={closeIcon} alt="close" />
      </a>

      <div style={modalStyle.content}>
        <h1>Hello my friend</h1>
      </div>
      <button 
        style={modalStyle.closeButton}
        onClick={() => setIsOpen(false)}>
        Close me
      </button>
    </Modal>
  )
 
}