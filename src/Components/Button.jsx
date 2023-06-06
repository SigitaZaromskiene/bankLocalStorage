function Button({ name, surname, setPersonDetails, setName, setSurname }) {
  const nameSurnameHandler = () => {
    setPersonDetails({
      name: name,
      surname: surname,
      amount: 0,
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
