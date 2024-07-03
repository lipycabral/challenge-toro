import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import * as St from "./style";

import { Home } from "@/pages/index";

export default function App() {
  return (
    <Router>
      <St.Body>
        <St.Nav>
          <Link to="/">
            <St.Logo />
          </Link>
        </St.Nav>
        <St.Routes>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </St.Routes>
      </St.Body>
    </Router>
  );
}
