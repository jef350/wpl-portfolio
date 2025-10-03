import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import './styles/index.css';

const router = createBrowserRouter([
  { element: <App />, children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:slug", element: <Post /> },
  ]},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
);
