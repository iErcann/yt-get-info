import { getVideoInfo } from "../lib"

getVideoInfo("nSnLpFYLgDU").then(data => {
    // see VideoDetails object
    const { title, author, channelId, viewCount, keywords, shortDescription } = data.videoDetails;

    // See CaptionTracks object
    const captionsTrackList = data.captions.playerCaptionsTracklistRenderer;
    const { captionTracks, audioTracks } = captionsTrackList;

    // See PlayerMicroformatRenderer object
    const additionnalDetails = data.microformat.playerMicroformatRenderer;
    const { category, description, lengthSeconds, publishDate, ownerChannelName, thumbnail, isFamilySafe } = additionnalDetails;
}
);