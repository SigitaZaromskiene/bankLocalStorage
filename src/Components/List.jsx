function List({ personList }) {
  if (personList === null) {
    return "LOADING....";
  }
  return (
    <div className="accounts-container">
      {personList.map((li) => (
        <div className="list-container">
          <div>{li.name}</div>
          <div>{li.surname}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
