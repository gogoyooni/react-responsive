import "./styles/App.scss";

import RootLayout from "./RootLayout";

import Home from "../src/pages/Home";
import Search from "../src/pages/Search";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
