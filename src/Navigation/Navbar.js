import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <StyledNavLink to="/roulette">Roulette</StyledNavLink>
      <StyledNavLink to="/movielist">MovieList</StyledNavLink>
    </Nav>
  );
}

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 12px;
  &:hover {
    color: grey;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-item: center;
  justify-content: center;
  background-color: pink;
  height: 2em;
`;
