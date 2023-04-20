import Appbar from "./Components/Appbar";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";
import "./App.css";
import { themeStyling } from "./Components/General";

function App() {
  return (
    <div className="App">
      <div>
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
