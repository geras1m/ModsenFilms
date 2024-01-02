import { ClosesModalBtn, Text, Video, VideoContainer, VideoModalBox } from "@components/VideoModal/styled";
import { useGetVideoQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect, useState } from "react";
import { baseYoutubeUrl, youtubeParams } from "@root/constants/constants";
import { setIsModalOpened } from "@store/slices/movieSlice";
import { Spinner } from "@components/Spinner";
import CrossImg from "@assets/icons/Cross.svg";
import { findTrailerOrTeaserFromData } from "@root/utils/findTrailerOrTeaserFromData";

export const VideoModal = () => {
  const [youtubeKey, setYoutubeSrc] = useState<string | undefined>("");
  const { videoId, isModalOpened } = useAppSelector((store) => store.movie);
  const { data, isFetching } = useGetVideoQuery({ videoId }, { skip: !videoId });
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && setYoutubeSrc(findTrailerOrTeaserFromData(data.results));
  }, [data]);

  const closeModal = () => {
    dispatch(setIsModalOpened(false));
  };

  //TODO: запретить скролл

  return (
    isModalOpened && (
      <VideoModalBox onClick={closeModal}>
        <VideoContainer>
          {isFetching && <Spinner />}
          {!isFetching && youtubeKey && <Video src={baseYoutubeUrl + youtubeKey + youtubeParams} />}
          {!youtubeKey && !isFetching && <Text>The trailer was not found :(</Text>}
        </VideoContainer>
        <ClosesModalBtn onClick={closeModal}>
          <CrossImg />
        </ClosesModalBtn>
      </VideoModalBox>
    )
  );
};
