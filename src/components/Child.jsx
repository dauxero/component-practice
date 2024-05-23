import React from "react";

const Child = ({ name, addMessage, setmessage }) => {
  const sendMessage = () => {
    addMessage("Este es el nuevo mensaje del hijo");
  };

  const changeName = () => {
    setmessage("Nuevo Nombre hijo");
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={sendMessage}>Enviar nuevo mensaje</button>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};

export default Child;
