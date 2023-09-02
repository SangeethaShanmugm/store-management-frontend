import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
          {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function ProtectedRoute({ children }) {
  if (localStorage.getItem("user_data")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
export default App;
