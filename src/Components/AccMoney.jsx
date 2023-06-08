import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function AccMoney({ li, setPersonList, personList, setEditData }) {
  const [inputAmount, setInputAmount] = useState(null);
  const [totalSum, setTotalSum] = useState(0);
  const [editSum, setEditSum] = useState(null);
  const [addOver1000Modal, setAddOver1000Modal] = useState(null);

  const addHandler = () => {
    const updatedAcc = personList.map((list) => {
      if (list.id !== li.id) return list;

      const newAmount = Number(li.total) + Number(inputAmount);

      if (inputAmount >= 1000) {
        setAddOver1000Modal(li);

        return list;
      }

      list.total = newAmount;
      return list;
    });

    setEditData({
      total: li.total,
      id: li.id,
    });

    setPersonList(updatedAcc);
  };

  const addHandlerModal = () => {
    const updatedAcc = personList.map((list) => {
      if (list.id !== li.id) return list;

      const newAmount = Number(li.total) + Number(inputAmount);

      list.total = newAmount;
      return list;
    });

    setEditData({
      total: li.total,
      id: li.id,
    });

    setPersonList(updatedAcc);
    setAddOver1000Modal(null);
    setInputAmount(null);
  };

  const withdrawHandler = () => {
    const minus = personList.map((lis) => {
      if (lis.id !== li.id) return lis;

      const minusSum = Number(li.total) - Number(inputAmount);
      if (inputAmount > lis.total) {
        return lis.total;
      }
      lis.total = minusSum;
      return lis;
    });

    setEditData({
      total: li.total,
      id: li.id,
    });

    setPersonList(minus);
    setInputAmount("");
  };

  return (
    <>
      <div className="money-container">
        <button onClick={withdrawHandler}>Withdraw</button>
        <input
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        ></input>
        <button onClick={addHandler}>Add</button>
      </div>
      <p>Total: {li.total} &euro; </p>
      {addOver1000Modal ? (
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
            <FontAwesomeIcon onClick={addHandlerModal} icon={faCheck} />
            <FontAwesomeIcon
              onClick={() => setAddOver1000Modal(null)}
              icon={faXmark}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AccMoney;
