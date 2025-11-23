import type {VideoType} from "@/types/Search";
import {
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
} from "@/utils/constants";
import {CardType, VideoDetailType} from "@/types/videoDetail";

export function translateVideo(
video: VideoType
) {
    return {
        videoId: video?.videoId || demoVideoUrl.slice(7),
        channelId: video?.author?.channelId || demoChannelUrl.slice(8),
        channelTitle: video?.author?.title || demoChannelUrl,
        title: video?.title || demoVideoTitle,
        imgUrl: video?.thumbnails?.[0]?.url || demoVideoUrl,
        views: video?.stats?.views ?? 0,
        duration: video?.lengthSeconds ?? 0,
        postedAt: video?.publishedTimeText ?? "",
    };
}

export function translateVideoDetailCard(
    card: CardType
) {
    return {
        videoId: card?.video?.videoId|| demoVideoUrl.slice(7),
        channelId: card?.label|| demoChannelUrl.slice(8),
        channelTitle: card?.video?.title || demoChannelUrl,
        title: card?.video?.title || demoVideoTitle,
        imgUrl: card?.video?.thumbnails?.[0]?.url || demoVideoUrl,
        views: card?.video?.stats?.views ?? 0,
        duration: card?.video?.lengthSeconds ?? 0,
        postedAt: "",
    };
}