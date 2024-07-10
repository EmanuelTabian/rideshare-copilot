import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import styled from "styled-components";

const AppContainer = styled.div``;

const Main = styled.main``;

function AppLayout() {
  return (
    <AppContainer>
      <Header />
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default AppLayout;
