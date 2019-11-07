import React, { useState } from 'react';


const Counter = (props) => {
  const [compteur, setCompteur] = useState(1);
  const handleChange = () => {
    setCompteur(compteur + 1);
  };
  return (
    <div>
      <p>{compteur}</p>
      <button
        type="button"
        onClick={handleChange}
      >
        Incrémenter
      </button>
    </div>
  );
};

export default Counter;
