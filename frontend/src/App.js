import "./App.css";

import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Setting from "./pages/Setting";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/About";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <UserRegister />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <UserLogin />}
        />
        <Route
          exact
          path="/setting/:id"
          element={!user ? <Navigate to="/login" /> : <Setting />}
        />
        <Route
          exact
          path="/dashboard"
          element={
            user ? (
              user.position === "teacher" ? (
                <TeacherDashboard />
              ) : (
                <StudentDashboard />
              )
            ) : (
              <UserLogin />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
