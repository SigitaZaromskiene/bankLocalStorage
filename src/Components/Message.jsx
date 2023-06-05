import { v4 as uuidv4 } from "uuid";

function Message({ message }) {
  return (
    <>
      {message.map((m) => (
        <div className="message" key={uuidv4}>
          {m.text}
        </div>
      ))}
    </>
  );
}

export default Message;
