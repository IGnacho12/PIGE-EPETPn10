import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(json => setData(json))   // ✅ acá usamos setData
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
