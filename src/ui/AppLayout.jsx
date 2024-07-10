import { Outlet } from "react-router";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
