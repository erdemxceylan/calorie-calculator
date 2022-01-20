import React from 'react';
import ReactDOM from 'react-dom'
import styles from "./Modal.module.css";

function Backdrop(props) {
   return <div onClick={props.onClick} className={styles.backdrop}></div>;
}

function ModalOverlay(props) {
   return (
      <div className={styles.modal}>{props.children}</div>
   )
}

function Modal(props) {
   document.getElementById("overlay").className = styles.overlay;
   return (
      <React.Fragment>
         {ReactDOM.createPortal(<Backdrop onClick={props.onBackdropClicked} />, document.getElementById("backdrop"))}
         {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlay"))}
      </React.Fragment>
   )
}

export default Modal;
