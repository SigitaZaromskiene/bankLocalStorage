import Button from "./Button";

function Form({
  name,
  surname,
  setName,
  setSurname,
  setPersonDetails,
  setPersonList,
  totalSum,
}) {
  return (
    <div className="form-container">
      <h3>Please enter your details</h3>
      <div className="details-container">
        <div className="name-container">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="name-container">
          <label>Surname</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
      </div>
      <Button
        name={name}
        surname={surname}
        setPersonDetails={setPersonDetails}
        setName={setName}
        setSurname={setSurname}
        totalSum={totalSum}
        setPersonList={setPersonList}
      ></Button>
    </div>
  );
}

export default Form;
