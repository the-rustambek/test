import React from 'react'
 import deleteIcon from "../../Assets/Img/delete.svg";
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

export default function MainTable() {
  return (
    <div className="p-3 w-100" style={{ background: "#f6f6f6" }}><table className="table text-secondary">
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
      <tr>
        <th scope="row">
            <img src="https://github.com/mdo.png" width="36"className='rounded ' height="30" alt="table img" />
        </th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>active</td>
        <td>2 min ago</td>
        <td className="d-flex">      
          <EditModal />
          <DeleteModal />
          </td>
       </tr>
      
    </tbody>
  </table></div>
  )
}
