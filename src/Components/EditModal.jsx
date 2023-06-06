import { useState } from "react";

function EditModal({ editModal, setEditData, setEditModal }) {
  const [name, setName] = useState(editModal.name);
  const [surname, setSurname] = useState(editModal.surname);

  const editHandler = () => {
    setEditData({
      name: name,
      surname: surname,
      id: editModal.id,
    });
    setEditModal(null);
  };

  return (
    <div className="edit-container">
      <h3>Please change your details</h3>
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
      <button className="button" onClick={editHandler}>
        Change
      </button>
    </div>
  );
}

export default EditModal;
