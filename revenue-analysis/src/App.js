import React from "react";
import ListPage from "./ListPage";
import ItemPage from "./ItemPage";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<ListPage />} />
          <Route exact path="/Home" element={<ListPage />} />
          <Route path="/User" element={<ItemPage />} />
        </Routes>
      </Router>
  );
}

export default App;
