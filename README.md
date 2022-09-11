# yt-get-info


Get youtube video information 

Uses the 'ytInitialPlayerResponse' client side variable.

---
## Install

```bash
npm install yt-get-info
```

## Usage

```ts

import { getVideoInfo } from "yt-get-info";

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
 ```

## API

### getVideoInfo(videoId : string) : VideoInfo

[npm-img]:https://img.shields.io/npm/v/yt-get-info
[npm-url]:https://www.npmjs.com/package/yt-get-info
[issues-img]:https://img.shields.io/github/issues/iercann/yt-get-info
[issues-url]:https://github.com/iercann/yt-get-info/issues
