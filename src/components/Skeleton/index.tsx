import {
  SkeletonContainer,
  SkeletonDescription,
  SkeletonElement,
  SkeletonInformation,
} from "@components/Skeleton/styled";

export const Skeleton = () => {
  return (
    <SkeletonContainer data-testid="skeletons">
      <SkeletonElement radius={"0"} width={"100%"} height={"183px"} />
      <SkeletonInformation>
        <SkeletonElement radius={"50%"} width={"36px"} height={"36px"} />
        <SkeletonDescription>
          <SkeletonElement radius={"0"} width={"100%"} height={"20px"} />
          <SkeletonElement radius={"0"} width={"100%"} height={"20px"} />
        </SkeletonDescription>
      </SkeletonInformation>
    </SkeletonContainer>
  );
};
