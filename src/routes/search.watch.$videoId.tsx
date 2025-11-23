import {type LoaderFunctionArgs, useLoaderData} from "react-router";
import invariant from "tiny-invariant";
import {getVideoDetail} from "@/utils/axiosClient";
import VideoDetail from "@/components/video/VideoDetail";
import {VideoDetailType} from "@/types/videoDetail";


export const loader = async ({params}: LoaderFunctionArgs) => {
    invariant(params.videoId, "Missing searchTerm param");
    const searchTerm   = params.searchTerm;
    const data = getVideoDetail(searchTerm!);
    console.log(data);
    return data;
};


function VideoDetailPage() {
    const data = useLoaderData<VideoDetailType>();
    return(
    <VideoDetail videoDetail={data}/>
)

}

export default VideoDetailPage;