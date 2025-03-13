import { useState } from "react";

import "./App.css";

interface FruitResponse {
  id: number;
  description: string;
  createdAt: string;
}

function App() {
  const [fruit, setFruit] = useState<FruitResponse>({} as FruitResponse);

  const getFruit = async () => {
    const response = await fetch("http://localhost:4001/random-words");
    const data = await response.json();

    setFruit(data.message);
  };

  return (
    <>
      <div className="card">
        <button onClick={() => getFruit()}>
          fruit is {fruit.description ?? "empty"}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the button to get a random fruit from the backend.
      </p>
    </>
  );
}

export default App;
