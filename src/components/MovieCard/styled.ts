import styled from "styled-components";

export const MovieCardContainer = styled.article`
  width: 100%;
  max-width: 322px;
  height: 283px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 0 15px 0 rgb(211, 124, 15);
    transform: rotate(1.5deg);
  }
`;

export const MoviePosterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const MoviePoster = styled.img.attrs(({ src }) => ({
  src: `${src}`,
  alt: "Movie poster",
}))`
  width: 100%;
  height: 186px;
  object-fit: cover;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Information = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const Avatar = styled.img.attrs(({ src }) => ({
  src: `${src}`,
  alt: "Avatar",
}))`
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.textColor};
`;

export const Name = styled.h2`
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  margin: 11px 0 0;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  margin: 4px 0 0;
`;
