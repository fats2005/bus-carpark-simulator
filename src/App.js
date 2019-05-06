import React from "react";

import Layout from "./components/Layout/Layout";
import CarparkSimulator from "./containers/CarparkSimulator/CarparkSimulator";

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
