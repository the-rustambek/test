import React from "react";
import Modal from 'react-modal';
import useActionsHooks from "../../features/hooks/useActionsHooks";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "30%"
  },
};

export default function CreateModal() {
  /******************************modal************************** */
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
    clear();
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
    clear();
  }
  /******************************function************************** */
  const { createUsers } = useActionsHooks();
  function clear() {
      let inputs = document.querySelectorAll('input');
      for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = null;
      }
      let textAreas = document.querySelectorAll('textarea');
      for (let i = 0; i < textAreas.length; i++) {
          textAreas[i].value = null;
      }
  }
  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      createUsers({
          img_src: data.get('img_src'),
          title: data.get('title'),
          phone: data.get('phone'),
          body: data.get('body'),
       });
      closeModal();
  };
  /******************************code************************** */
  return (
    <div>
      <button
        type="button"
        className="border-0 px-3 text-white me-3 rounded"
        style={{ background: "#51438F", height: "30px" }}
        onClick={openModal} >
        Add member
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Member </h1>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body mt-3">
              <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="col-12">
                <label htmlFor="validationCustom01" className="form-label">Name</label>
                <input  name="title"  type="text" className="form-control" controlid="validationCustom01" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="validationCustom02" className="form-label">Phone</label>
                <input type="text" name="phone" className="form-control" controlid="validationCustom02" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="validationCustom02" className="form-label">Email</label>
                <input type="email" name="body" className="form-control" controlid="validationCustom03" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
  
              <div className="col-12">
                <div className="form-check ms-0 ps-0">
                  <label htmlFor="formFile" className="form-label">Photo</label>
                  <input name="img_src" className="form-control" type="file" id="formFile" />
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12 modal-footer d-flex justify-content-between mt-3 pt-4 ms-2">
                <button className="btn btn-primary px-5"  type="submit">Save</button>
                <button
                  type="button"
                  className="btn px-5 "
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
}
