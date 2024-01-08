import styled from "styled-components";

interface IBurgerMenuProps {
  open: boolean;
}

export const BurgerWrapper = styled.nav<IBurgerMenuProps>`
  grid-area: theme;
  justify-self: end;
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  z-index: 2;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.textColor};
    border-radius: 10px;
    transition: ${({ theme }) => theme.transitionBurger};
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 750px) {
    display: flex;

    div {
      width: 1.5rem;
      height: 0.1rem;
    }
  }
`;

export const Menu = styled.div<IBurgerMenuProps>`
  width: 100vw;
  display: none;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 80px 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  transition: ${({ theme }) => theme.transition};

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const Text = styled.p`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.textColor};
`;

export const SelectedThemeText = styled.span`
  font-size: 20px;
  font-weight: bold;
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.textColor};
`;
