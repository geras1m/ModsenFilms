import {
  ClosesModalBtn,
  Video,
  VideoContainer,
  VideoModalBox,
} from "@components/VideoModal/styled";
import { useGetVideoQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect, useState } from "react";
import { baseYoutubeUrl } from "@root/constants/constants";
import { setIsModalOpened } from "@store/slices/movieSlice";
import { Spinner } from "@components/Spinner";
import { findTrailerFromData } from "@root/utils/findTrailerFromData";
import CrossImg from "@assets/icons/Cross.svg";

export const VideoModal = () => {
  const [youtubeSrc, setYoutubeSrc] = useState<string>("");
  const { videoId, isModalOpened } = useAppSelector((store) => store.movie);
  const { data, isFetching, isLoading } = useGetVideoQuery({ videoId });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      const youtubeKey = findTrailerFromData(data.results);
      const url = `${baseYoutubeUrl}${youtubeKey}`;
      setYoutubeSrc(url);
    }
  }, [data]);

  const closeModal = () => {
    dispatch(setIsModalOpened(false));
  };

  return (
    isModalOpened && (
      <VideoModalBox onClick={closeModal}>
        <VideoContainer>
          {isFetching || isLoading ? <Spinner /> : <Video src={youtubeSrc} />}
        </VideoContainer>
        <ClosesModalBtn onClick={closeModal}>
          <CrossImg />
        </ClosesModalBtn>
      </VideoModalBox>
    )
  );
};
