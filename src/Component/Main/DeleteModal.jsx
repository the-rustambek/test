import React from "react";
import { useSelector } from "react-redux";
import deleteIcon from "../../Assets/Img/delete.svg";
import useActionsHooks from "../../store/useActionsHooks";

export default function DeleteModal({usersId}) {
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
        data-bs-toggle="modal"
        data-bs-target="#exampleModalEdit2"
      >
        <img src={deleteIcon} alt="editIcon" />
      </button>
      <div
        className="modal fade"
        id="exampleModalEdit2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
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
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <div className="col-12 modal-footer d-flex justify-content-between">
                <button      onClick={handleDelete.bind(
                                                            null,
                                                            usersId
                                                        )} className="btn btn-primary px-5" type="button">Ok</button>
                <button
                  type="button"
                  className="btn px-5 "
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
