import styled from "styled-components";
import StyledLink from "./StyledLink";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <StyledLink active={router.pathname === "/"}>Home</StyledLink>
        </Link>
        <Link href="/product">
          <StyledLink active={router.pathname === "/product"}>
            Product
          </StyledLink>
        </Link>
        <Link href="/team">
          <StyledLink active={router.pathname === "/team"}>Team</StyledLink>
        </Link>
        <Link href="/account">
          <StyledLink active={router.pathname === "/account"}>
            Account
          </StyledLink>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
