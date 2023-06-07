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
  setEditSum,
  editSum,
  editData,
}) {
  if (personList === null) {
    return "LOADING....";
  }

  const sorted = [...personList].sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );
  console.log(sorted);

  return (
    <div className="accounts-container">
      {sorted.map((li) => (
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
            setPersonList={setPersonList}
            setEditMoney={setEditModal}
            setEditSum={setEditSum}
            editSum={editSum}
            setEditData={setEditData}
            editData={editData}
          ></AccMoney>
        </div>
      ))}
    </div>
  );
}

export default List;
