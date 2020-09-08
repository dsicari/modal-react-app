import React, { useState, useEffect } from 'react';
import { JsonToTable } from "react-json-to-table";
import { CSVLink, CSVDownload } from "react-csv";
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
      top: '27%',
      left: '23%',
      right: '23%',
      bottom: 'auto',
      padding: '0',
      backgroundColor: 'white',
      boxShadow: '0px 2px 8px rgba(35, 31, 32, 0.16)',
      borderRadius: '8px'
    }
  },
  content:{
    
  },
  image:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '89px'    
  },
  message:{
    wordWrap: 'break-word',
    marginTop: '24px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '140%',
    textAlign: 'center',
    color: '#204986'
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
    marginRight: "2%",
    marginLeft: "2%"
  },
}

export default function ModalNotificationDetails({data, isOpen, setIsOpen}){

  console.log('data', data);

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
        
        <JsonToTable json={data} />

        <div style={modalStyle.buttonArea}>
          <CSVLink data={data}>
            <button 
              style={modalStyle.downloadButton} 
              className="default-button" 
              onClick={null}
            >
              Download            
            </button>
          </CSVLink>

          <button 
            style={modalStyle.closeButton} 
            className="default-button" 
            onClick={() => setIsOpen(false)}
          >
            Fechar
          </button>
        </div>        
      </div>
    </Modal>
  )
 
}