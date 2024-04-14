import { Fragment } from "react";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function Main() {
  return (
    <main>
      <CoreConcepts />
      <Examples />
    </main>
  );
}

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
