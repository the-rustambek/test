import React from "react";
import { useSelector } from "react-redux";
import editIcon from "../../Assets/Img/edit.svg";
import useActionsHooks from "../../store/useActionsHooks";
import Modal from 'react-modal';
import { inputClear } from "../../store/utils";

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

export default function EditModal() {
   const id = useSelector((state) => state.counter.value);
   const { updateUsersById, fetchUsersById } = useActionsHooks();
   const {
    users
    } = useSelector((state) => state.users); 
    const updateUsers = users?.filter(item=>item?.id===id)

  /**************************modal************************* */
   let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);
   function openModal() {
     setIsOpen(true);
     inputClear();
     fetchUsersById(id);
   }
   function afterOpenModal() {
     subtitle.style.color = '#f00';
   }
   function closeModal() {
     setIsOpen(false);
     inputClear();
   }
   /*****************************function*************************** */
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     const formData = data.get('img_src')
        ? {
              img_src: data.get('img_src'),
              title: data.get('title'),
              body: data.get('body'),
              phone: data.get('phone'),
          }
        : {
              title: data.get('title'),
              body: data.get('body'),
              phone: data.get('phone'),
          };
         updateUsersById({
        id,
        formData,
    });
    closeModal();
};
 
   /*****************************code*************************** */

  return (
    <div>
      <button
        type="button"
        className="border-0 p-2 me-1 bg-transparent"
        style={{ background: "#51438F", height: "30px" }}
        onClick={openModal}
        >

        <img src={editIcon} alt="editIcon" />
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
                Edit Member
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="col-12">
                  <label htmlFor="validationCustom01" className="form-label">
                    Name
                  </label>
                  <input name="title"
                    type="text"
                    className="form-control"
                    controlid="validationCustom01"
                    required
                    defaultValue={updateUsers[0]?.name}

                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <label  name="phone" htmlFor="validationCustom02" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    controlid="validationCustom02"
                    required
                    defaultValue={updateUsers[0]?.phone}


                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <label name="body" htmlFor="validationCustom02" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    controlid="validationCustom03"
                    required
                    defaultValue={updateUsers[0]?.email}


                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-12">
                  <div className="form-check ms-0 ps-0">
                    <label name="img_src" htmlFor="formFile" className="form-label">
                      Photo
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12 modal-footer d-flex justify-content-between">
                  <button className="btn btn-primary px-5" type="submit">
                    Save
                  </button>
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
