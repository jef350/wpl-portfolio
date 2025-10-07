import Navbar from "./components/Navbar";
import "./styles/navbar.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}