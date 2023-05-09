import Appbar from "./Components/Appbar";
import ToDoList from "./Components/ToDoList";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Appbar />
        <div className="container-fluid bg-light p-3 contentList">
          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
