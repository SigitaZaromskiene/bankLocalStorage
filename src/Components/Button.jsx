function Button({ name, surname, setPersonDetails, setName, setSurname }) {
  const nameSurnameHandler = () => {
    setPersonDetails({
      name: name,
      surname: surname,
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
