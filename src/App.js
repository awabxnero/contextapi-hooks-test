import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Navbar />
          <Booklist />
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
