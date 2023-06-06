import DeleteBtn from "./DeleteBtn";
import DeleteModal from "./DeleteModal";
import EditButton from "./EditButton";
import EditModal from "./EditModal";

function List({
  personList,
  setDelete,
  setDeleteModal,
  deleteModal,
  setEdit,
  setEditModal,
  editModal,
  setPersonDetails,
}) {
  if (personList === null) {
    return "LOADING....";
  }
  return (
    <div className="accounts-container">
      {personList.map((li) => (
        <div className="list-container">
          <div
            style={{
              display: "flex",
              gap: "30px",
              width: "100%",
              fontSize: "24px",
              justifyContent: "center",
            }}
          >
            <div>{li.name}</div>
            <div>{li.surname}</div>
          </div>
          <div className="btn-list">
            <DeleteBtn
              li={li}
              setDelete={setDelete}
              setDeleteModal={setDeleteModal}
            />
            <EditButton
              setEdit={setEdit}
              setEditModal={setEditModal}
              li={li}
            ></EditButton>
          </div>
          {deleteModal && deleteModal.id === li.id ? (
            <DeleteModal
              setDeleteModal={setDeleteModal}
              setDelete={setDelete}
              li={li}
            ></DeleteModal>
          ) : null}
          {editModal ? (
            <EditModal
              editModal={editModal}
              setPersonDetails={setPersonDetails}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default List;
