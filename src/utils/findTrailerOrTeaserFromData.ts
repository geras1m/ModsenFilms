import { IVideo, VideoSite, VideoType } from "@app-types/types";

type findTrailerOrTeaserFromDataType = (dataVideos: IVideo[]) => string | undefined;

export const findTrailerOrTeaserFromData: findTrailerOrTeaserFromDataType = (dataVideos) => {
  if (dataVideos.length === 0) {
    return undefined;
  }
  for (const dataVideo of dataVideos) {
    if (dataVideo.type === VideoType.Trailer || dataVideo.type === VideoType.Teaser) {
      if (dataVideo.site === VideoSite.YouTube) {
        return dataVideo.key;
      }
    }
  }
  return dataVideos[0].key;
};
