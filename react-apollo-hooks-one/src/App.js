import React from "react";
import "./App.css";
import GetAllUsers from "./components/users/GetAllUsers";
import CreateUser from "./components/users/CreateUser";
import CreateUserAndUpdateCache from "./components/users/CreateUserAndUpdateCache";
import UpdateUser from "./components/users/UpdateUser";
import DeleteUser from "./components/users/DeleteUser";
import DeleteUserAndUpdateCache from "./components/users/DeleteUserAndUpdateCache";

function App() {
  return (
    <div className="App">
      <DeleteUserAndUpdateCache />
      <DeleteUser />
      <UpdateUser />
      <CreateUserAndUpdateCache />
      <CreateUser />
      <GetAllUsers />
    </div>
  );
}

export default App;
