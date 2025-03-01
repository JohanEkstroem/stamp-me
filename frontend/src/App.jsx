import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState();
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>{message || "Loading..."}</p>
        </header>
      </div>
    </>
  );
};

export default App;
