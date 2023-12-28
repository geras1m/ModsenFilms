import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  max-width: 144px;
  height: 21px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoText = styled.h1`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
`;
