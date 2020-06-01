// Package: https://www.npmjs.com/package/react-modal
// yarn add react-modal

import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';

// To avoid warning of accessibility, make sure to bind modal to your appElement
// http://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [styledModalIsOpen, setStyledModalIsOpen] = useState(false);
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  /* 
    MODAL PROPS
    isOpen: Show/Hide modal
    onRequestClose: When user clicks outside modal or press ESC
    shouldCloseOnOverlayClick: When user clicks outside modal
  */

  return (
    <div className="App">

      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <br /><br />
      <button onClick={() => setStyledModalIsOpen(true)}>Open Styled Modal</button>
      <br /><br />
      <button onClick={() => setLoadingModalIsOpen(true)}>Open Loading Modal</button>
      
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
      >
        <h2>Title of this crazy modal</h2>
        <p>Modal sensual body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>

      <Modal 
        isOpen={styledModalIsOpen} 
        onRequestClose={() => setStyledModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay:{
            backgroundColor: 'rgba(50, 50, 50, 0.2)'            
          },
          content: {
            color: 'red',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Title of this beauty modal</h2>
        <p>Modal styled body</p>
        <button onClick={() => setStyledModalIsOpen(false)}>Close</button>
      </Modal>

      <Modal 
        isOpen={loadingModalIsOpen} 
        onRequestClose={() => setLoadingModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay:{
            backgroundColor: 'rgba(50, 50, 50, 0.2)'            
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <ReactLoading 
          type={'spin'} 
          color={'#1CBCF2'} 
          height={'50px'} 
          width={'50px'} />
          
      </Modal>

    </div>
  );
}

export default App;
