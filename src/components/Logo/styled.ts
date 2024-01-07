import styled from "styled-components";

export const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  max-width: 144px;
  height: 21px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 750px) {
    max-width: 153px;
  }
`;

export const LogoText = styled.h1`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;
