import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function AddOver1000Modal({
  setAddOver1000Modal,
  li,
  setEditData,
  inputAmount,
  personList,
  setInputAmount,
  setPersonList,
}) {
  const addMoneyHandler = () => {
    console.log(inputAmount);
    const updatedAcc = () => {
      const newAmount = Number(li.total) + Number(inputAmount);

      console.log(newAmount);

      setEditData({
        total: Number(newAmount),
        id: li.id,
      });
    };

    setInputAmount("");
    setPersonList(updatedAcc);
  };
  return (
    <div className="deleteModal">
      <p>Are you sure?</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon onClick={addMoneyHandler} icon={faCheck} />
        <FontAwesomeIcon
          onClick={() => setAddOver1000Modal(null)}
          icon={faXmark}
        />
      </div>
    </div>
  );
}
export default AddOver1000Modal;
