import React from "react";
import { useSelector } from "react-redux";
import deleteIcon from "../../Assets/Img/delete.svg";
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

export default function DeleteModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  const counter = useSelector((state) => state.counter.value);
  const { fetchUsers, deleteUsersById } = useActionsHooks();
  const [data, setData] = React.useState([]);

  const { users } = useSelector(
    (state) => state.users
  );

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  React.useEffect(() => {
    if (Array.isArray(users?.data)) setData(users.data);
  }, [users]);


  const handleDelete = (userId) => {
    deleteUsersById(userId);
  };

  return (
    <div>
      <button
        type="button"
        className="border-0 p-2 me-1 bg-transparent"
        style={{ background: "#51438F", height: "30px" }}
        onClick={openModal}
      >
        <img src={deleteIcon} alt="editIcon" />
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
              <h1 className="modal-title fs-5" id="exampleModalLabel2">
                Are you sure to delete this member?
              </h1>
              <button
                type="button"
                className="btn-close"
                 onClick={closeModal}
                ></button>
            </div>
            <div className="modal-body mt-5">
              <div className="col-12 modal-footer d-flex justify-content-between">
                <button onClick={handleDelete.bind(
                  null,
                  counter
                )} className="btn btn-primary px-5" type="button">Ok</button>
                <button
                  type="button"
                  className="btn px-5 "
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
