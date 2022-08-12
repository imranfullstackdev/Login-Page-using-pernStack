import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [data, SetData] = useState({
    name: "",
    email: "",
    password: "",
    phnum: "",
  });
  const navigate=useNavigate()
  const { name, email, password, phnum } = data;
  const changeHandler = (e) => [
    SetData({ ...data, [e.target.name]: e.target.value}),
  ];
  const viewUserpage=()=>{
    navigate('/Viewuser')
  }
  // for posting the data
  const submitHandler = async(e) => {
    e.preventDefault()
try {
  const body={data}
  const response=await fetch(`http://localhost:8000/register`,{
    method:"POST",
    headers:{ "Content-Type": "application/json" },
    body:JSON.stringify(body)
  })
  // console.log(response)
  // console.log( data);
  
} catch (error) {
  console.log(error);
  
}
  };
  return (
    <>
      <div className="justify-content:center">
        <form onSubmit={submitHandler}>
          <label>NAME:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <label>password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <label>Phonenumber:</label>
          <input
            type="number"
            name="phnum"
            value={phnum}
            onChange={changeHandler}
          />
          <button className="btn-primary">SUBMIT</button><br/>
        </form>
          <button onClick={viewUserpage}>ViewUser  </button>
      </div>
    </>
  );
};

export default Login;
