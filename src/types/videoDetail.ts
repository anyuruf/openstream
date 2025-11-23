export interface VideoDetailType {
    author: Author
    cards: Card[]
    category: string
    chapters: any[]
    description: string
    endScreen: EndScreen
    isLiveContent: boolean
    isLiveNow: boolean
    keywords: string[]
    lengthSeconds: number
    musics: Music[]
    publishedDate: string
    stats: Stats5
    superTitle: SuperTitle
    thumbnails: Thumbnail5[]
    title: string
    videoId: string
}

/********* Private Types to avoid conflict with other types from the same api *********/

interface Author {
    avatar: Avatar[]
    badges: Badge[]
    canonicalBaseUrl: string
    channelId: string
    stats: Stats
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

interface Stats {
    subscribers: number
    subscribersText: string
}

export interface CardType {
    label: string
    link?: Link
    type: string
    video?: Video
}

interface Card {
    label: string
    link?: Link
    type: string
    video?: Video
}

interface Link {
    displayDomain: string
    thumbnails: Thumbnail[]
    title: string
    url: string
}

interface Thumbnail {
    height: number
    url: string
    width: number
}

interface Video {
    lengthSeconds: number
    stats: Stats2
    thumbnails: Thumbnail2[]
    title: string
    videoId: string
}

interface Stats2 {
    views: number
}

interface Thumbnail2 {
    height: number
    url: string
    width: number
}

interface EndScreen {
    items: Item[]
}

interface Item {
    channel?: Channel
    type: string
    playlist?: Playlist
    video?: Video2
}

interface Channel {
    avatar: Avatar2[]
    channelId: string
    description: string
    title: string
}

interface Avatar2 {
    height: number
    url: string
    width: number
}

interface Playlist {
    playlistId: string
    stats: Stats3
    thumbnails: Thumbnail3[]
    title: string
}

interface Stats3 {
    videos: number
}

interface Thumbnail3 {
    height: number
    url: string
    width: number
}

interface Video2 {
    lengthSeconds: number
    stats: Stats4
    thumbnails: Thumbnail4[]
    title: string
    videoId: string
}

interface Stats4 {
    views: number
}

interface Thumbnail4 {
    height: number
    url: string
    width: number
}

interface Music {
    attributes: Attributes
}

interface Attributes {
    album: string
    artist: string
    licenses: string
    song: string
    writers: string
}

interface Stats5 {
    comments: number
    likes: number
    views: number
}

interface SuperTitle {
    items: string[]
}

interface Thumbnail5 {
    height: number
    url: string
    width: number
}
