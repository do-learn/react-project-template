import React, { lazy } from "react";

const HelloWorld = lazy(() =>
  import(/* webpackChunkName: "HelloWorld" */ "./components/HelloWorld")
);

const App: React.FC = () => {
  return (
    <div>
      <h2>HELLO WORLD</h2>
      <HelloWorld />
    </div>
  );
};

export default App;
