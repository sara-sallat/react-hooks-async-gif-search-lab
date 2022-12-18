import React from "react";

const GifList = ({ list }) => {
  return (
    <ul className="col-xs-6 list-group" style={{ paddingLeft: "20px" }}>
      {list.map((item) => (
        <li key={item.id} className="list-group-item text-center">
          <img src={item.images.original.url} alt={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;