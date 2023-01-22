import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useActionsHooks from '../../store/useActionsHooks';
  import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

export default function MainTable() {
  const [data, setData] = React.useState([]);
const [click,setClick]=useState("")
  const { users, usersLoading } = useSelector(
    (state) => state.users
);
 const { fetchUsers } = useActionsHooks();
 
useEffect(() => {
  fetchUsers();
}, [fetchUsers]);

useEffect(() => {
  if (Array.isArray(users?.data)) setData(users.data);
}, [users, usersLoading]);

console.log(click,"clickk");

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
    <tbody >
      {users.map((e,i)=>(
              <tr key={i} >
              <th scope="row">
                  <img src="https://github.com/mdo.png" width="36"className='rounded ' height="30" alt="table img" />
              </th>
              <td>{e.title.slice(0,8)}</td>
              <td>+9989314877{e.id}</td>
              <td>{e.body.slice(0,3)}@gmail.com</td>
              <td>active</td>
              <td>{e.id} min ago</td>
              <td className="d-flex" onClick={()=>setClick(e.id)}>      
                <EditModal        id={click}/>
                <DeleteModal  id={e.id}/>
                </td>
             </tr>
      ))}
    </tbody>
  </table></div>
  )
}
