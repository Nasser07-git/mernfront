import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditGame from "./components/EditGame";
import GameList from "./components/GameList";
 
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="edit/:id" element={<EditGame />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;