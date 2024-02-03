import React, { useState } from "react";

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadMore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHanlder() {
    console.log("click hua hn");
    setReadMore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹{price}</h4>

          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-More" onClick={readmoreHanlder}>
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
