import React from "react";

const FourthComponent = () => {
  const handleClicked = (e) => {
    alert("Has hecho click al boton");
  };
  const handleDoubleClick = (e) => {
    alert("hola doble click");
  };

  const handleMouseEnter = () => {
    console.log("ha entrado en div");
  };
  const handleMouseLeave = () => {
    alert("has salido del div");
  };

  // onMouseEnter y onMouseLeave con una sola función con Alert
  const handleMouse = (e, action) => {
    alert(`Has ${action}  la caja`);
  };

  // onMouseEnter y onMouseLeave con una sola función con  Console Log
  const handleMouseCl = (e, action) => {
    console.log(`Has ${action}  la caja`);
  };
  return (
    <>
      <div>
        <h2>Eventos en React</h2>
        {/* Evento Click */}
        <div>
          <button
            onClick={() => {
              console.log("Hola, soy un evento Click!!");
            }}
          >
            Haz Click!!
          </button>
        </div>
        <div>
          <button onClick={handleClicked}>Aquí también haz Click!!</button>
        </div>

        {/* Evento Doble Click */}
        <div>
          <button onDoubleClick={handleDoubleClick}>Haz doble click!!</button>
        </div>

        {/* Evento Mouse Enter y Mouse Leave */}
        <hr />
        <div id="box">
          <div
            id="box1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>Pasa el Mouse por encima!!!</p>
          </div>
          <div
            id="box2"
            onMouseEnter={(e) => handleMouse(e, "entrado a")}
            onMouseLeave={(e) => handleMouse(e, "salido de")}
          >
            <p>Pasa el Mouse por encima!!!</p>
          </div>
          <div
            id="box3"
            onMouseEnter={(e) => handleMouseCl(e, "entrado a")}
            onMouseLeave={(e) => handleMouseCl(e, "salido de")}
          >
            <p>Pasa el Mouse por encima!!!</p>
          </div>
        </div>
        {/* Evento Focus y Blur */}
      </div>
    </>
  );
};

export default FourthComponent;
