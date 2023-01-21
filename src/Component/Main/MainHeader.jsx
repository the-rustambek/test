import React from "react";
import "./Main.css";
function MainHeader() {
  return (
    <div className="p-3 w-100" style={{ background: "#f6f6f6" }}>
      <div className="d-flex justify-content-between align-item-center">
        <div className=" bg-white">
          <button className="border-0 p-2 m-3 fw-900 button-active">
            Members
          </button>
          <button className="border-0 p-2 m-3 bg-white fw-900">Admins</button>
        </div>
        <button
          className="border-0 px-3 text-white me-3 rounded"
          style={{ background: "#51438F", height: "30px" }}
        >
          Add Member
        </button>
      </div>
      <form className="d-flex">
        <input
          type="text"
          className="form-control mx-2 p-2 ps-3" style={{width:"160px"}}
          id="exampleFormControlInput1"
          placeholder="Name"
        />
        <input
          type="email"
          className="form-control mx-2 p-2 ps-3" style={{width:"160px"}}
          id="exampleFormControlInput2"
          placeholder="Email"
        />
        <input
          type="text"
          className="form-control mx-2 p-2 ps-3" style={{width:"160px"}}
          id="exampleFormControlInput1"
          placeholder="Phone"
        />
        <select className="form-select  " style={{width:"160px"}} aria-label="Default select example">
          <option value="Selected Status" disabled >Selected Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" className="border-0 rounded ms-3 px-3" style={{background: "#51438F", color:"white"}}>Search</button>
      </form>
    </div>
  );
}

export default MainHeader;
