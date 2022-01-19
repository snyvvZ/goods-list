import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Goods from "./components/Goods";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <main>
        <Filter />
        <Goods />
      </main>
    </div>
  );
};

export default App;
