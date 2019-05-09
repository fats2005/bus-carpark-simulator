import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleUp,
  faArrowCircleLeft,
  faArrowCircleDown,
  faArrowCircleRight,
  faHandPointLeft,
  faHandPointRight,
  faBus
} from "@fortawesome/free-solid-svg-icons";

import Layout from "./components/Layout/Layout";
import CarparkSimulator from "./containers/CarparkSimulator/CarparkSimulator";

library.add(
  faArrowCircleUp,
  faArrowCircleLeft,
  faArrowCircleDown,
  faArrowCircleRight,
  faHandPointLeft,
  faHandPointRight,
  faBus
);

function App() {
  return (
    <div>
      <Layout>
        <CarparkSimulator />
      </Layout>
    </div>
  );
}

export default App;
