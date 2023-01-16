import React, { Component } from "react";
import css from './Modal.module.css'

export class Modal extends Component{
componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
   
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
    render() {
        const { image } = this.props;
        return (
           <div className={ css.overlay} onClick={this.handleBackdropClick}>
            <div className={css.modal} >
    <img src={image} alt="" />
  </div>
 </div>
    );
   }
}