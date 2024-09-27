import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Nav from "./Nav";

const StyledDevider = styled.div`
  /* Aside layout originally designed by Jonas Schmedtmann */

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    overflow: hidden;
  }
`;
const Container = styled.div`
  @media (min-width: 480px) {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
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

      <Footer />
    </>
  );
}

export default AppLayout;
