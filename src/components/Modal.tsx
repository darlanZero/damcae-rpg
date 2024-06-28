import React from 'react'
import ReactDOM from 'react-dom'

const Modal: React.FC<ModalInterface> = ({children, onClose}) => {
  return ReactDOM.createPortal (
    <div 
        className='fixed inset-0 z-50 w-96 lg:w-[600px] container open:animate-fade-in overflow-auto flex items-center justify-center rounded'
    >
        <div className='rounded-lg shadow-lg relative bg-richBlack-1'>
            <button 
                className='p-2 gap-2 text-dark-theme-text font-text hover:animate-pulse'
                onClick={onClose}
            >
                &times;
            </button>
            <div className='p-4 font-text'>
                {children}
            </div>
        </div>
    </div>,
    document.body
  )
}

export default Modal