import React from 'react';

const Tile = ({ id, selectTile }) => {
  return (
    <div id={id} onClick={selectTile}>
      {/* Image will be dynamically rendered here */}
    </div>
  );
}

export default Tile;
