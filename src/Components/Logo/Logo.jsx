import styled from "styled-components";
import format from "date-fns/format";

const Logo = () => {
  return (
    <Wrapper>
      <Link href="/">New Grid Times</Link>
      <TodayDate>{format(new Date(), "EEEE, MMMM do, yyyy")}</TodayDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-family: "Chomsky";
  font-size: 3rem;
`;

const TodayDate = styled.p``;

export default Logo;
