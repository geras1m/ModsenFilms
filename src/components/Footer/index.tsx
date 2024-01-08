import {
  Content,
  Copyright,
  FooterBox,
  FooterContainer,
  NavLink,
  NavWrapper,
  SocialLink,
  SocialWrapper,
} from "@components/Footer/styled";
import { NavList, SocialList } from "@constants/constants";

export const Footer = () => {
  return (
    <FooterBox>
      <FooterContainer>
        <Content>
          <NavWrapper>
            {NavList.map((navItem) => (
              <NavLink key={navItem.id} href={navItem.link}>
                {navItem.value}
              </NavLink>
            ))}
          </NavWrapper>
          <SocialWrapper>
            {SocialList.map((socialItem) => (
              <SocialLink key={socialItem.id} href={socialItem.link}>
                {<socialItem.icon />}
              </SocialLink>
            ))}
          </SocialWrapper>
        </Content>
        <Copyright>2024 Modsen company</Copyright>
      </FooterContainer>
    </FooterBox>
  );
};
