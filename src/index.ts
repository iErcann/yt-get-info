import { VideoInfo } from './types';
import { DomHandler, DomUtils, Parser } from 'htmlparser2';

const axios = require('axios').default;

export async function getVideoInfo(id: string): Promise<VideoInfo> {
    const response = await axios.get(`https://www.youtube.com/watch?v=${id}`);
    const videoInfo = parseHtml(response.data);
    return videoInfo!;
}

function parseHtml(htmlString: string): VideoInfo | null {
    const handler = new DomHandler();
    const parser = new Parser(handler);
    parser.write(htmlString);
    parser.done();
    const dom = handler.dom;
    const scripts = DomUtils.findAll(elem => elem.type === 'script', dom);
    let videoInfo: VideoInfo | null = null;
    for (let i = 0; i < scripts.length && !videoInfo; i++) {
        let data = scripts[i] && DomUtils.getText(scripts[i]);
        const start = 'var ytInitialPlayerResponse =';
        if (data.includes(start)) {
            data = data.substring(start.length);
            data = data.slice(0, -1);
            videoInfo = JSON.parse(data);
        }
    }
    return videoInfo;
}
