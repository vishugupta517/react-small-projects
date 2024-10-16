export function Modal({  closeModal }) {
  return (
    <>
      <div className='modal-container'>
        <h3>Modal Header</h3>
      </div>
      <span onClick={() => closeModal()}>X</span>
    </>
  );
}
