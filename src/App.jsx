import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <TaskBoard searchTerm={searchTerm}/>
    </div>
  );
}

export default App;