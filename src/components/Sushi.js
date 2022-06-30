import React from "react";

function Sushi( { sushi, handleEatSushi } ) {
// destructure here
const { id, name, img_url, price, eaten } = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatSushi(id)}>
        
        {eaten ? ' ' : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
