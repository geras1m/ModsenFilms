import styled from "styled-components";

export const SkeletonContainer = styled.div`
  width: 100%;
  max-width: 322px;
  height: 283px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SkeletonElement = styled.div<{
  width: string;
  height: string;
  radius: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -200px;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(167, 167, 167, 0.5) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    animation: loading 1s ease-in-out infinite;

    @keyframes loading {
      from {
        left: -300px;
      }
      to {
        left: 100%;
      }
    }
  }
`;

export const SkeletonInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const SkeletonDescription = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 16px;
`;
