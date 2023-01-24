import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActionsHooks from "../../features/hooks/useActionsHooks";
import { counterAction } from "../../features/slice/clickIdSlice";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function MainTable() {
  const [, setData] = React.useState([]);
  const { users, usersLoading } = useSelector((state) => state.users);
  const { fetchUsers } = useActionsHooks();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (Array.isArray(users?.data)) setData(users?.data);
  }, [users, usersLoading, fetchUsers]);

  const dispatch = useDispatch();
  const idClickHandler = (amount) => {
    dispatch(counterAction.increment(amount));
  };
  /************************main code **************************** */
  return (
    <div className="p-3 w-100" style={{ background: "#f6f6f6" }}>
      <table className="table text-secondary">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Member Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Operation</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.length
            ? users?.map((e, i) => (
                <tr key={i}>
                  <th scope="row">
                    <img
                      src="https://github.com/mdo.png"
                      width="36"
                      className="rounded "
                      height="30"
                      alt="table img"
                    />
                  </th>
                  <td>{e.name}</td>
                  <td>{e.phone}</td>
                  <td>{e.email}</td>
                  <td>active</td>
                  <td>{e.id} min ago</td>
                  <td className="d-flex" onClick={() => idClickHandler(e.id)}>
                    <EditModal />
                    <DeleteModal />
                  </td>
                </tr>
              ))
            : "Sizda hali userlar yo'q"}
        </tbody>
      </table>
    </div>
  );
}
