import Appbar from "./Components/Appbar";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";
import {Routes,Route} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column container-fluid">
        <Appbar />
        <div className="container-fluid bg-light p-3 contentList">
          <Routes>
            <Route path="/" element={<ToDoList />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
