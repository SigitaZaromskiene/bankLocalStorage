import { v4 as uuidv4 } from "uuid";

function Button({
  name,
  surname,
  setPersonList,
  personDetails,
  setPersonDetails,
  setName,
  setSurname,
  totalSum,
}) {
  const nameSurnameHandler = () => {
    setPersonDetails({
      name: name,
      surname: surname,
      total: totalSum,
      id: uuidv4(),
    });
    setName("");
    setSurname("");
  };
  return (
    <button className="button" onClick={nameSurnameHandler}>
      Submit
    </button>
  );
}

export default Button;
