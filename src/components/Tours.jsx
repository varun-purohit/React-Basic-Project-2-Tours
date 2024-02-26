import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="text-center">
        <h2>Our Tours</h2>
        <div className="bg-green-500 w-28 mx-auto my-0 h-1"></div>
      </div>
      <div className="px-0 py-8 grid gap-8 md:grid-cols-2 md:items-start lg:grid-cols-3 lg:items-start ">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
