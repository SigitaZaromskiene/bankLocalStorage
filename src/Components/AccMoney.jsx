function AccMoney({
  setTotalSum,
  inputAmount,
  setInputAmount,
  li,
  totalSum,
  setPersonList,
  setPersonDetails,
  personList,
}) {
  const addHandler = () => {
    const updatedAcc = personList.map((list) => {
      if (list.id !== li.id) return list;
      else {
        const newAmount = Number(li.total) + Number(inputAmount);
        console.log(list);
        return newAmount;
      }
    });
    setPersonDetails(updatedAcc);
  };

  return (
    <>
      <div className="money-container">
        <button>Withdraw</button>
        <input onChange={(e) => setInputAmount(e.target.value)}></input>
        <button onClick={addHandler}>Add</button>
      </div>
      <p>Total: 0 &euro; </p>
    </>
  );
}

export default AccMoney;
