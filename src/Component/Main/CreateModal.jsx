import React from "react";
import { useSelector } from "react-redux";
import useActionsHooks from "../../store/useActionsHooks";

export default function CreateModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
      clear();
  };

  const handleClose = () => {
      setOpen(false);
      clear();
  };
  const { createUsers } = useActionsHooks();
  const { singleUsersError: error } = useSelector(
      (state) => state.users
  );

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
      console.log(data.get("img_src"))
      createUsers({
          img_src: data.get('img_src'),
          title: data.get('title'),
          phone: data.get('phone'),
          body: data.get('body'),
       });
      handleClose();
  };
  return (
    <div>
      <button
        type="button"
        className="border-0 px-3 text-white me-3 rounded"
        style={{ background: "#51438F", height: "30px" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add member
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Member </h1>
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
              <div className="col-12 modal-footer d-flex justify-content-between">
                <button className="btn btn-primary px-5" type="submit">Save</button>
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
