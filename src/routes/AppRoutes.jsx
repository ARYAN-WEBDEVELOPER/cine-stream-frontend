import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Reviews from "../pages/Reviews";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/reviews"
        element={<Reviews />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

    </Routes>
  );
};

export default AppRoutes;