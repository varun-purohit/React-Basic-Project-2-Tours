import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="bg-white rounded shadow-custom ease-in-out duration-300 relative hover:shadow-hover ">
      <img className="h-80 w-[100%] rounded-t" src={image} alt={name} />
      <span className="absolute top-0 right-0 text-white p-2 tracking-[1px] bg-green-500 rounded-tr">
        {price}
      </span>
      <div className="py-8 px-6">
        <h5 className="text-center leading-6 text-2xl font-medium mb-4">
          {name}
        </h5>
        <p className="leading-6  text-gray-500 mb-6">
          {readMore ? info : `${info.substring(0, 200)}...`}{" "}
          <button
            className="text-green-500 bg-transparent border-transparent capitalize font-semibold "
            type="button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="bg-transparent border-transparent capitalize border-[1px] border-green-500 rounded-sm px-[0.75rem] py-[0.375rem] text-center text-green-500 hover:bg-green-400 hover:text-white "
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
