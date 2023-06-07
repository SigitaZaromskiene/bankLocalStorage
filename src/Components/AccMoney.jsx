import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AccMoney({ li, setPersonList, personList, setEditData, editData }) {
  const [inputAmount, setInputAmount] = useState("");
  const [totalSum, setTotalSum] = useState(0);
  const [editSum, setEditSum] = useState(null);

  const addHandler = () => {
    console.log(personList);
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

    setInputAmount("");
    setPersonList(updatedAcc);
  };

  const withdrawHandler = () => {
    const minus = personList.map((lis) => {
      if (lis.id !== li.id) return lis;

      const minusSum = Number(li.total) - Number(inputAmount);
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
    </>
  );
}

export default AccMoney;
