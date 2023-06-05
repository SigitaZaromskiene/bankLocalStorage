import DeleteBtn from "./DeleteBtn";
import DeleteModal from "./DeleteModal";

function List({ personList, setDelete, setDeleteModal, deleteModal }) {
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
          <DeleteBtn
            li={li}
            setDelete={setDelete}
            setDeleteModal={setDeleteModal}
          />
          {deleteModal && deleteModal.id === li.id ? (
            <DeleteModal></DeleteModal>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default List;
