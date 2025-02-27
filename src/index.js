import "./index.css";

import { Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import PrivateComponent from "./components/PrivateComponent";
import About from "./containers/About";
import Login from "./containers/Login";
import MovieList from "./containers/MovieList";
import NotFound from "./containers/NotFound";
import Pricing from "./containers/Pricing";
import Register from "./containers/Register";
import Subscribed from "./containers/Subscribed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<About />}>
            <Route
              path="description"
              element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>}
            />
            <Route
              path="services"
              element={
                <Box sx={{ mt: 10 }}>
                  Listing trending movies for a week
                </Box>
              }
            />
          </Route>
          <Route
            path="pricing"
            element={
              <PrivateComponent>
                <Pricing />
              </PrivateComponent>
            }
          />
          <Route path="subscribed/:plan" element={<Subscribed />} />
          <Route
            path="login"
            element={
              <PrivateComponent loginOnly={false}>
                <Login />
              </PrivateComponent>
            }
          />
          <Route
            path="register"
            element={
              <PrivateComponent loginOnly={false}>
                <Register />
              </PrivateComponent>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
