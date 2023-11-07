import React, { memo } from "react";

const Item = memo(({ id, value, onChange }) => {
  return (
    <React.Fragment>
      <div className="container">
        <h5>RE-RENDER {(Math.random() * 100).toFixed()}</h5>
        <input
          type="text"
          name="text"
          id="text"
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
        />
      </div>
    </React.Fragment>
  );
});

export default Item;
