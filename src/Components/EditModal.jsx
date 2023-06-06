import { useState } from "react";
import EditButton from "./EditButton";
import Button from "./Button";

function EditModal({ editModal, setPersonDetails }) {
  const [name, setName] = useState(editModal.name);
  const [surname, setSurname] = useState(editModal.surname);

  return (
    <div className="form-container">
      <h3>Please enter your details</h3>
      <div className="details-container">
        <div className="name-container">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="name-container">
          <label>Surname</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
      </div>
      <button className="button" />
    </div>
  );
}

export default EditModal;
