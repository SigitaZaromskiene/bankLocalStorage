import "./App.scss";
import Form from "./Components/Form";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { read, create } from "./Components/localStorage";
import List from "./Components/List";

const KEY = "LocalStorage data";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [personDetails, setPersonDetails] = useState(null);
  const [personList, setPersonList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    setPersonList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (personDetails === null) {
      return;
    }
    create(KEY, personDetails);
    setLastUpdate(Date.now());
  }, [personDetails]);

  return (
    <div className="container">
      <Form
        name={name}
        setName={setName}
        setSurname={setSurname}
        surname={surname}
        setPersonDetails={setPersonDetails}
      ></Form>
      <List personList={personList}></List>
    </div>
  );
}

export default App;
