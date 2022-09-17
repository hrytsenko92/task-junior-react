import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import { Context } from "./components/context";

function App() {
const [userLink, setUserLink] = useState("")
console.log(userLink)
const fSetUserLink = (link) => {setUserLink(link)}
// useEffect(() => {

// })
  return (
    <Context.Provider value={{
      fSetUserLink
    }}>
      <Search />
    </Context.Provider>
  );
}

export default App;
