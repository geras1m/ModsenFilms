import styled from "styled-components";

export const FooterBox = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 14px;
  padding-top: 64px;
  padding-bottom: 17px;

  @media (max-width: 570px) {
    padding: 10px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const NavWrapper = styled.nav`
  max-width: 560px;
  height: 69px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  column-gap: 32px;

  @media (max-width: 570px) {
    height: 100%;
    flex-wrap: nowrap;
    max-width: 100%;
  }
`;

export const NavLink = styled.a.attrs({
  target: "_blank",
})`
  font-size: 20px;
  font-weight: bold;
  line-height: 23px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.orange};
  }

  @media (max-width: 570px) {
    width: 100%;

    &:nth-child(4) {
      margin-top: 15px;
    }
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  column-gap: 26px;
`;

export const SocialLink = styled.a.attrs({
  target: "_blank",
})`
  width: 16px;
  height: 16px;
  transition: 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Copyright = styled.p`
  margin: 40px 0 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 28px;
  color: ${({ theme }) => theme.borderColor};

  @media (max-width: 570px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
