import React from "react";
import editIcon from "../../Assets/Img/edit.svg";

export default function EditModal() {
  return (
    <div>
      <button
        type="button"
        className="border-0 p-2 me-1 bg-transparent"
        style={{ background: "#51438F", height: "30px" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModalEdit"
      >
        <img src={editIcon} alt="editIcon" />
      </button>
      <div
        className="modal fade"
        id="exampleModalEdit"
        tabindex="-1"
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
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12">
                  <label for="validationCustom01" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    controlId="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <label for="validationCustom02" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    controlId="validationCustom02"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <label for="validationCustom02" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    controlId="validationCustom03"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <div class="form-check form-switch">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                      Status
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      controlId="flexSwitchCheckChecked"
                      checked
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check ms-0 ps-0">
                    <label for="formFile" className="form-label">
                      Photo
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12 modal-footer d-flex justify-content-between">
                  <button className="btn btn-primary px-5" type="button">
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
