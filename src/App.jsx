import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-12">Welcome to Dream Journal</h1>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-full mb-4 text-xl hover:bg-blue-700 transition duration-300">
        Describe your dream
      </button>

      <button className="bg-green-600 text-white px-6 py-3 rounded-full text-xl hover:bg-green-700 transition duration-300">
        Get an answer
      </button>
    </div>
  );
}

export default App;
