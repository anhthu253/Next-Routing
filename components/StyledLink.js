import styled from "styled-components";

const StyledLink = styled.a`
  padding: 0.5rem;
  color: white;
  background: darkslategray;
  border: none;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  &:hover {
    background: darkgreen;
    cursor: pointer;
  }
`;

export default StyledLink;
