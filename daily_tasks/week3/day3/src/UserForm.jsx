import { useState } from "react";
import "./App.css";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const clear = () => {
    setName("");
    setEmail("");
  };

  return (
    <div className="form">
      <h2>Registration Form</h2>
<div className="inputField">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
</div>
      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default UserForm;