import { ClosesModalBtn, Text, Video, VideoContainer, VideoModalBox } from "@components/VideoModal/styled";
import { useGetVideoQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect, useState } from "react";
import { baseYoutubeUrl, youtubeParams } from "@root/constants/constants";
import { setIsVideoModalOpen } from "@store/slices/appSlice";
import { Spinner } from "@components/Spinner";
import CrossImg from "@assets/icons/Cross.svg";
import { findTrailerOrTeaserFromData } from "@root/utils/findTrailerOrTeaserFromData";

export const VideoModal = () => {
  const [youtubeKey, setYoutubeSrc] = useState<string | undefined>("");
  const { videoId } = useAppSelector((store) => store.movie);
  const { isModalOpened } = useAppSelector((store) => store.app);
  const { data, isFetching } = useGetVideoQuery({ videoId }, { skip: !videoId });
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && setYoutubeSrc(findTrailerOrTeaserFromData(data.results));
  }, [data]);

  const closeModal = () => {
    dispatch(setIsVideoModalOpen(false));
  };

  // useEffect(() => {
  //   document.body.style.position = isModalOpened ? "fixed" : "static";
  // }, [isModalOpened]);
  //TODO: запретить скролл

  //TODO fix прыгание надписи "The trailer was not found :("

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
