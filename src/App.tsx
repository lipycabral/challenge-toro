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
          <St.Container>
            <Link to="/">
              <St.Logo />
            </Link>
          </St.Container>
        </St.Nav>
        <St.Routes>
          <St.Container>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </St.Container>
        </St.Routes>
      </St.Body>
    </Router>
  );
}
