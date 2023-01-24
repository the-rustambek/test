import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../../Component/Dashboard/Dashboard";
import Loader from "../../Component/loader/loader";
import Main from "../../Component/Main/Main";
import Navbar from "../../Component/Navbar/Navbar";

function Homepage() {
  const { singleUsersLoading } = useSelector((state) => state.users);
  return (
    <>
      {singleUsersLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className="d-flex ">
            <Dashboard />
            <Main />
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
