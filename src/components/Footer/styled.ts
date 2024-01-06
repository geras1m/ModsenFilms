import styled from "styled-components";

export const FooterBox = styled.footer`
  border-top: 1px solid rgba(196, 196, 196, 1);
  flex: 0 0 auto;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 17px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavWrapper = styled.nav`
  width: 100%;
  max-width: 560px;
  height: 69px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  column-gap: 32px;
`;

export const NavLink = styled.a.attrs({
  target: "_blank",
})`
  font-size: 20px;
  font-weight: bold;
  line-height: 23px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline 2px;
    text-underline-offset: 2px;
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
  color: rgba(196, 196, 196, 1);
`;
