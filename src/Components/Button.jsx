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
  inputAmount,
}) {
  const nameSurnameHandler = () => {
    setPersonDetails({
      name: name,
      surname: surname,
      total: 0,

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
