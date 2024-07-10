import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div>
      <NavLink to="/cars">Cars</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/documents">Documents</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
}

export default Nav;
