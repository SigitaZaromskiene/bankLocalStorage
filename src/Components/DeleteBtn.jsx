function DeleteBtn({ setDeleteModal, li }) {
  const deleteBillHandler = () => {
    setDeleteModal(li);
  };
  return (
    <button className="button" onClick={deleteBillHandler}>
      Delete
    </button>
  );
}

export default DeleteBtn;
