import { useState } from 'react';
import { Modal } from './Modal';
import './style.css';
export default function ModalPopup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    console.log('parent ran close modal fnx');
    setIsModalOpen(false);
  }
  return (
    <>
      {isModalOpen ? (
        <Modal setIsModalOpen={setIsModalOpen} closeModal={closeModal} />
      ) : (
        <button onClick={() => handleModal()}>Open Modal Popup</button>
      )}
    </>
  );
}
