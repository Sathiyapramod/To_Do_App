import Appbar from "./Components/Appbar";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column container-fluid">
        <Appbar />
        <div className="container-fluid bg-light p-3 contentList">
          <ToDoList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
