import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import closeIcon from "../../assets/exit-black.svg";
import imgError from '../../assets/error.svg';
import imgNoConnection from '../../assets/noConnection.svg';

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
  closeButton:{
    display: 'block',
    marginTop: '85px',
    marginRight: '16px',
    marginBottom: '16px',
    marginLeft: 'auto',
  },
}

export default function MessageModal({type, isOpen, setIsOpen}){

  /*
    type: error, noConnection
      Type of message and image to display on modal
    isOpen and setIsOpen: useState to control modal visibility
  */

  const [messageBody, setMessageBody] = useState({
    image: imgError,
    message: []
  });

  console.log(messageBody);

  // Use an array of String to break line in message
  useEffect(() => {
    if(type === 'error'){
      setMessageBody({
        image: imgError,
        message: ['Algo não saiu como prevíamos.', 'Feche e tente novamente']
      });
    }
    else if(type === 'noConnection'){
      setMessageBody({
        image: imgNoConnection,
        message: ['Parece que você está sem internet.', 'Verifique sua conexão e tente novamente']});
    }
  }, [type]);

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
        <img style={modalStyle.image} src={messageBody.image} />
        <p style={modalStyle.message}>
          {messageBody.message.map(
            (msg, index) => {
              return <span key={index}>{msg}<br /></span>;
            }
          )}
        </p>
        <button 
          style={modalStyle.closeButton} 
          className="default-button" 
          onClick={() => setIsOpen(false)}
        >
          Fechar
        </button>
      </div>
    </Modal>
  )
 
}