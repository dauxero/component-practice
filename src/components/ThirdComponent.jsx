import React from "react";
import PropTypes from "prop-types";
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

//? validador de tipo de dato
ThirdComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  card: PropTypes.object,
};
