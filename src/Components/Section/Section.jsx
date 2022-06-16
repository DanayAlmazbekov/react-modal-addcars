import React from "react";
import { useState } from "react";
import AddCar from "../AddCar/AddCar";
import Filters from "../Filters/Filters";
import Modal from "../Modal/Modal";

const Section = () => {
  const [filtersVis, setFiltersVis] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          fontSize: "20px",
          color: "white",
        }}>
        <strong
          onClick={() =>
            !filtersVis ? setFiltersVis(true) : setFiltersVis(false)
          }>
          GOAT
        </strong>
        {filtersVis ? <Filters /> : null}
      </div>
      {isModalOpen ? (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : null}

      <button
        style={{
          backgroundColor: "green",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={() => setIsModalOpen(true)}>
        Open modal
      </button>
    </div>
  );
};

export default Section;
