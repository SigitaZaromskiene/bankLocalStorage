import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const DeleteModal = ({ setDeleteModal, setDelete, li }) => {
  return (
    <>
      <div className="deleteModal">
        <p>Are you sure?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            fontSize: "24px",
          }}
        >
          <FontAwesomeIcon icon={faCheck} onClick={() => setDelete(li)} />
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setDeleteModal(null)}
          />
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
