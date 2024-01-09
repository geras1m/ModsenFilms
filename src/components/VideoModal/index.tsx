import { useEffect, useState } from "react";
import { useGetVideoQuery } from "@store/api/movieApi";
import { setIsVideoModalOpen } from "@store/slices/appSlice";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { baseYoutubeUrl, youtubeParams } from "@constants/constants";
import { findTrailerOrTeaserFromData } from "@utils/findTrailerOrTeaserFromData";
import CrossImg from "@assets/icons/Cross.svg";
import { ClosesModalBtn, Text, Video, VideoContainer, VideoModalBox } from "@components/VideoModal/styled";
import { Spinner } from "@components/Spinner";

export const VideoModal = () => {
  const [youtubeKey, setYoutubeSrc] = useState<string | undefined>("");
  const { videoId } = useAppSelector((store) => store.movie);
  const { isModalOpened } = useAppSelector((store) => store.app);
  const { data, isFetching } = useGetVideoQuery({ videoId }, { skip: !videoId });
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && setYoutubeSrc(findTrailerOrTeaserFromData(data.results));
  }, [data]);

  useEffect(() => {
    document.body.style.overflow = isModalOpened ? "hidden" : "auto";
  }, [isModalOpened]);

  const closeModal = () => {
    dispatch(setIsVideoModalOpen(false));
  };

  return (
    isModalOpened && (
      <VideoModalBox data-test="video-modal" onClick={closeModal}>
        <VideoContainer>
          {isFetching && <Spinner />}
          {!isFetching && youtubeKey && <Video src={baseYoutubeUrl + youtubeKey + youtubeParams} />}
          {!youtubeKey && !isFetching && data?.results.length === 0 && (
            <Text>The trailer was not found :(</Text>
          )}
        </VideoContainer>
        <ClosesModalBtn onClick={closeModal}>
          <CrossImg />
        </ClosesModalBtn>
      </VideoModalBox>
    )
  );
};
