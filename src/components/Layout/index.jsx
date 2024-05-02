import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Layout() {
  return (
     <div>
        <Navbar />
        <Outlet />
        <footer>
           all right
        </footer>
    </div>
  )
}