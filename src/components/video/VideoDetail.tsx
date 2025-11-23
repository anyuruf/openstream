import { Link } from "react-router";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import MediaChromeDetail from "../media_chrome/MediaChromeDetail";
import {VideoDetailType} from "@/types/videoDetail";
import {translateVideoDetailCard} from "@/utils/translateVideo";
import VideoCard from "@/components/video/VideoCard";

type Props = {
    videoDetail: VideoDetailType;
};

function VideoDetail (props: Props) {
  const videoDetail = props.videoDetail;
  const {cards: videoCards }= videoDetail;

  return (
    <Box minHeight="95vh">
    <>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <MediaChromeDetail videoId={videoDetail.videoId} />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${videoDetail.author.channelId}`}>
                <Typography variant="subtitle1"  color="#fff" >
                  {videoDetail.author.title}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail.stats.views} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail.stats.likes} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
            {videoCards.map((card) => {
                return(
                    <VideoCard miniVideo={translateVideoDetailCard(card)} />
                );
                })
            }
        </Box>
      </Stack>
      </>
    </Box>
  );
};

export default VideoDetail;
