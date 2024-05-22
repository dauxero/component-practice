import React from "react";

export const ThirdComponent = ({ name, lastName, card }) => {
  const { height, bloodGroup, allergies } = card;

  return (
    <div>
      <h2>Comunicación entre Componentes</h2>
      <ul>
        <li>{name}</li>
        <li>{lastName}</li>
        <li>{height}</li>
        <li>{bloodGroup}</li>
        <li>{allergies}</li>
      </ul>
    </div>
  );
};

// Hooks - eventos
