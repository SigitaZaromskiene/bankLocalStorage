import "./App.scss";
import Form from "./Components/Form";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { read, create } from "./Components/localStorage";
import List from "./Components/List";
import Message from "./Components/Message";

const KEY = "LocalStorage data";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [personDetails, setPersonDetails] = useState(null);
  const [personList, setPersonList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [message, setMessage] = useState(null);
  const [deleteLi, setDeleteLi] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const msg = (text) => {
    setMessage((m) => [...(m ?? []), { text, id: uuidv4 }]);
  };

  useEffect(() => {
    setPersonList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (personDetails === null) {
      return;
    }
    create(KEY, personDetails);
    msg("New bill is created");
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
      <List
        personList={personList}
        setDeleteModal={setDeleteModal}
        setDelete={setDeleteLi}
        deleteModal={deleteModal}
      ></List>
      {message ? <Message message={message}></Message> : null}
    </div>
  );
}

export default App;
