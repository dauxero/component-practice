import React from "react";

const FourthComponent = () => {
  const handleClicked = (e) => {
    alert("Has hecho click al boton");
  };
  return (
    <>
      <div>
        <h2>evento de react</h2>
        {/* evento de click aplicando una funcion  */}
        <div>
          <button
            onClick={() => {
              console.log("evento de click");
            }}
          ></button>
        </div>
        <div>
          {/* evento de click aplicando una funcion  */}
          <button onClick={handleClicked}>Aqui tambien haz click</button>
        </div>
      </div>
    </>
  );
};

export default FourthComponent;
