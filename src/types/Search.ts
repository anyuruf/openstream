import {demoChannelUrl, demoVideoTitle, demoVideoUrl} from "@/utils/constants";

export interface ResultDataType {
    contents: ContentType[]
    cursorNext: string
    didYouMean: any
    estimatedResults: number
    filterGroups: FilterGroup[]
    refinements: string[]
}

export interface ContentType {
    type: string
    video: VideoType
}

export interface MiniVideoType {
    videoId: string
    channelId: string
    channelTitle: string
    title: string
    imgUrl: string
    views: number
    duration: number
    postedAt: string
}

export interface VideoType {
    author: Author
    badges: string[]
    descriptionSnippet: string
    isLiveNow: boolean
    lengthSeconds: number
    movingThumbnails?: MovingThumbnail[]
    publishedTimeText?: string
    stats: Stats
    thumbnails: Thumbnail[]
    title: string
    videoId: string
}

/********* Private Types to avoid conflict with other types from the same api *********/

interface Author {
    avatar: Avatar[]
    badges: Badge[]
    canonicalBaseUrl?: string
    channelId: string
    title: string
}

interface Avatar {
    height: number
    url: string
    width: number
}

interface Badge {
    text: string
    type: string
}

interface MovingThumbnail {
    height: number
    url: string
    width: number
}

interface Stats {
    views: number
}

interface Thumbnail {
    height: number
    url: string
    width: number
}

interface FilterGroup {
    filters: Filter[]
    title: string
}

interface Filter {
    cursorSelect?: string
    label: string
    selected: boolean
}
