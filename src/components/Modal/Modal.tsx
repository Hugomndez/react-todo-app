import ReactDOM from 'react-dom';
import './Modal.css'


const Modal = ({children}: HTMLFormElement) => {
  return ReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal') as HTMLDivElement
  );
}

export default Modal;
