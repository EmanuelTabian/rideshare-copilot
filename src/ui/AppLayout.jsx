import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Nav from "./Nav";

const StyledDevider = styled.div`
  /* Aside layout originally designed by Jonas Schmedtmann */

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 13.5rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  @media (min-width: 480px) {
    margin: 0;
    max-width: 120rem;
    margin: 0 auto;
  }
`;

const Main = styled.main``;

function AppLayout() {
  return (
    <>
      <Header />
      <StyledDevider>
        <Nav />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledDevider>
      {/* Temporarily deactivate the footer */}
      {/* <Footer /> */}
    </>
  );
}

export default AppLayout;
