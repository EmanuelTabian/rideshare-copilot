import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
