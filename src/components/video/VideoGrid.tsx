import VideoCard from "./VideoCard"
import   Box  from "@mui/material/Box";
import { translateVideo} from "@/utils/translateVideo";
import type { ContentType } from "@/types/Search";

type Props = {
    videos: ContentType;
};

export default function VideoGrid(props: Props) {
    const videos = props.videos;
  // Guard against empty videos array
  if (!Array.isArray(videos) || videos.length === 0) {
    return <p style={{ color: "#aaa" }}>No videos found</p>;
  }
  
  return (
      <Box
          sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(335px, 100%), 1fr))',
              gap: 2,
              backgroundColor:'inherit'
          }}
      >
      {videos.map((content) => {
          const videoFilter = translateVideo(content?.video);
        return(
            <>
                  {/* unwrap video object in {type: "video", video: {}, } */}

                  <VideoCard miniVideo={videoFilter} key={videoFilter?.videoId}/>
              </>);
          }
      )}
     </Box>
  );
};