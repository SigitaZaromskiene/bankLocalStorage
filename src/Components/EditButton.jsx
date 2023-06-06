function EditButton({ setEditModal, li }) {
  return (
    <button className="button" onClick={() => setEditModal(li)}>
      Edit
    </button>
  );
}

export default EditButton;
