function List({ personList }) {
  if (personList === null) {
    return "LOADING....";
  }
  return (
    <>
      {personList.map((li) => (
        <div className="list-container">
          <div>{li.name}</div>
          <div>{li.surname}</div>
        </div>
      ))}
    </>
  );
}

export default List;
