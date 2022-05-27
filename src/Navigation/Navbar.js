import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({list}) {
  return (
    <Nav>
      <StyledNavLink to="/roulette">Roulette</StyledNavLink>
      <StyledNavLink to="/movielist" state={{ list }}>MovieList</StyledNavLink>
    </Nav>
  );
}

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 12px;
  z-index: 100;
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
