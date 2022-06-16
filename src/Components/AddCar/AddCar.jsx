import React from "react";
import { useState } from "react";

const AddCar = () => {
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  function save() {
    let newCar = {
      model: "",
      image: "",
      id: Date.now(),
    };
  }
  console.log(model);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "brown",
        borderRadius: "50px",
      }}>
      <input
        style={{ background: "yellow" }}
        placeholder="Model"
        type="text"
        value={model}
        onChange={e => setModel(e.target.value)}
      />
      <input
        style={{ background: "aqua" }}
        type="text"
        placeholder="Image"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
    </div>
  );
};

export default AddCar;
