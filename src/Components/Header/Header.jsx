import styled from "styled-components";
import { Search, Menu, User } from "react-feather";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <MaxWidthWrapper>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>

            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </MaxWidthWrapper>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  /* border: dashed deeppink; */
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  svg {
    display: block;
  }
  /* justify-content: space-between; */
`;

const MainHeader = styled(MaxWidthWrapper)``;

export default Header;
