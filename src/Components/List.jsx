import AccMoney from "./AccMoney";
import DeleteBtn from "./DeleteBtn";
import DeleteModal from "./DeleteModal";
import EditButton from "./EditButton";
import EditModal from "./EditModal";

function List({
  personList,
  setDelete,
  setDeleteModal,
  deleteModal,
  setEditData,
  setEditModal,
  editModal,
  setTotalSum,
  inputAmount,
  setInputAmount,
  totalSum,
  setPersonDetails,
  setPersonList,
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
            <div>{li.totalSum}</div>
          </div>
          <div className="btn-list">
            <DeleteBtn
              li={li}
              setDelete={setDelete}
              setDeleteModal={setDeleteModal}
            />
            <EditButton
              setEditData={setEditData}
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
          {editModal && editModal.id === li.id ? (
            <EditModal
              editModal={editModal}
              setEditData={setEditData}
              setEditModal={setEditModal}
            />
          ) : null}

          <AccMoney
            setTotalSum={setTotalSum}
            inputAmount={inputAmount}
            setInputAmount={setInputAmount}
            li={li}
            totalSum={totalSum}
            setPersonDetails={setPersonDetails}
            personList={personList}
          ></AccMoney>
        </div>
      ))}
    </div>
  );
}

export default List;
