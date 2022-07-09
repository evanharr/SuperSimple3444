import React from 'react';
import ReactDom from 'react-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//Puts component in center
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#30303070',
  padding: '120px',
  zIndex: 1000,
}

//Makes everything that can't be clicked grey
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000
}

//Puts the X in the corner
const CLOSE_STYLE = {
    position: 'absolute',
    top: 0,
    left: 0
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
            
            <IconButton aria-label="close" style={CLOSE_STYLE} onClick={onClose}>
              <CloseIcon />
            </IconButton>
            
            {children}
            </div>
        </>,
        document.getElementById('portal')
  )
}