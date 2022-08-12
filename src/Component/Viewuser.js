import React, { useState, useEffect } from "react";

const Viewuser = () => {
  const [userData, setUserData] = useState([]);
  async function alluser() {
    const alluserdata = await fetch(`http://localhost:8000/`);
    const responseData = await alluserdata.json();
    setUserData(responseData);
  }
//   console.log(userData);
  
 
//   for editing the user
  const EditUser=(id)=>{
    console.log(id)
}
// for deleting the user
const DeleteUser=(id)=>{
    console.log(id)
}
useEffect(() => {
    alluser();
  }, []);
  return (
    <>
     
      <table>
        <tr>
          <th>NAME</th>
          <th>Email</th>
          <th>Password</th>
          <th>NUMBER</th>
        </tr>
        <tbody>
          {userData.map((userinfo) => (
            <tr key={userinfo.id}>
              <td>{userinfo.username}</td>
              <td>{userinfo.useremail}</td>
              <td>{userinfo.userpassword}</td>
              <td>{userinfo.usernumber}</td>
              <td>
                <button onClick={()=>EditUser(userinfo.id)}>Edit</button>
              </td>
              <td>
                <button onClick={()=>DeleteUser(userinfo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Viewuser;
