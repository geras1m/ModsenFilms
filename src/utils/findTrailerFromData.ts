import { IVideo, VideoType } from "@app-types/types";

type findTrailerFromDataType = (dataVideos: IVideo[]) => string;

export const findTrailerFromData: findTrailerFromDataType = (dataVideos) => {
  for (const dataVideo of dataVideos) {
    if (dataVideo.type === VideoType.Trailer || dataVideo.type === VideoType.Teaser) {
      return dataVideo.key;
    }
  }
  return dataVideos[0].key;
};
