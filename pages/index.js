import StyledLink from "../components/StyledLink";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <Link href="team" passHref>
        <StyledLink>This is our team</StyledLink>
      </Link>
    </>
  );
}
