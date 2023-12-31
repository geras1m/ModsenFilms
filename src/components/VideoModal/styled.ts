import styled from "styled-components";

// TODO отключить прокрутку при открытой модалке (Свойство CSS overflow: hidden; для тега <body>)

export const VideoModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoContainer = styled.div`
  width: 80%;
  height: 80%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Video = styled.iframe.attrs<{ src: string }>(({ src }) => ({
  src,
  width: "100%",
  height: "100%",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share",
  allowFullScreen: true,
}))``;

export const ClosesModalBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255 138 0);
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;

  &:hover {
    background-color: rgb(175 175 175);
  }
`;
