import "./App.scss";
import Form from "./Components/Form";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { read, create, destroy, edit } from "./Components/localStorage";
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
  const [editData, setEditData] = useState(null);
  const [editModal, setEditModal] = useState(null);

  const [inputAmount, setInputAmount] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

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

  useEffect(() => {
    if (deleteLi === null) {
      return;
    }
    destroy(KEY, deleteLi.id);
    setLastUpdate(Date.now());
    msg("Bill was deleted");
  }, [deleteLi]);

  useEffect(() => {
    if (editData === null) {
      return;
    }
    edit(KEY, editData, editData.id);
    msg("Bill was edited");
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <div className="container">
      <Form
        name={name}
        setName={setName}
        setSurname={setSurname}
        surname={surname}
        setPersonDetails={setPersonDetails}
        totalSum={totalSum}
        setPersonList={setPersonList}
      ></Form>
      <List
        personList={personList}
        setDeleteModal={setDeleteModal}
        setDelete={setDeleteLi}
        deleteModal={deleteModal}
        setEditData={setEditData}
        setEditModal={setEditModal}
        editModal={editModal}
        setPersonDetails={setPersonDetails}
        setInputAmount={setInputAmount}
        setTotalSum={setTotalSum}
        inputAmount={inputAmount}
        totalSum={totalSum}
      ></List>
      {message ? <Message message={message}></Message> : null}
    </div>
  );
}

export default App;
