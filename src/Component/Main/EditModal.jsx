import React from "react";
import { useSelector } from "react-redux";
import editIcon from "../../Assets/Img/edit.svg";
import useActionsHooks from "../../store/useActionsHooks";

export default function EditModal({id}) {
  // console.log(id,"iddd")

  const [open, setOpen] = React.useState(false);
  const { updateUsersById, fetchUsersById } = useActionsHooks();
  const {
      users,
      singleUsersError: error,
  } = useSelector((state) => state.users);

  const handleClickOpen = () => {
      setOpen(true);
      clear();
      fetchUsersById(id);
  };

  const handleClose = () => {
      setOpen(false);
      clear();
  };

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
          console.log(users,"usererr 53-qator");
        updateUsersById({
        id: users.id,
        formData,
    });
    handleClose();
};

// console.log(users,"userss")

  return (
    <div>
      <button
        type="button"
        className="border-0 p-2 me-1 bg-transparent"
        style={{ background: "#51438F", height: "30px" }}
        // data-bs-toggle="modal"
        // data-bs-target="#exampleModalEdit"
        onClick={handleClickOpen}
      >
        <img src={editIcon} alt="editIcon" />
      </button>
      <div
        className="modal fade"
        id="exampleModalEdit"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
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
                data-bs-dismiss="modal"
                aria-label="Close"
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
                    // defaultValue={users.data.name}

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
                    // defaultValue={users.data.phone}

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
                    // defaultValue={users.data.body}

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
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
