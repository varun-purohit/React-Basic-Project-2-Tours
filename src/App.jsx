import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newTours = tours?.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = () => {
    setIsLoading(true);
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setTours(data);
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // return <Loading />;

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button type="button" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="w-[90vw] mx-auto my-5rem">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
