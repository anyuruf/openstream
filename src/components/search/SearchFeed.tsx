import { Typography, Box } from "@mui/material";
import { useNavigation } from "react-router";

import { VideoGrid } from "../index";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import PageContainer from "@/components/PageContainer";

const SearchFeed = ({videos, searchTerm}) => {
    const navigation = useNavigation();
    const isLoading = Boolean(navigation.state === "loading");
    const handleRefresh = React.useCallback(() => {
        if (!isLoading) {
        }
    }, [isLoading]);

    return (
    <>
        {/**************************** For Deprecation ******************
          <Box p={2} minHeight="95vh">
          <Typography variant="caption" ml={{ sm: "35px"}}>
            Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
          </Typography>
          <Box display="flex">
            <Box sx={{ mr: { sm: '35px' } }}/>
            {<VideoGrid videos={videos} />}
          </Box>
        </Box>
        **************************************/}
        <PageContainer
            title={searchTerm}
            breadcrumbs={[{ title: searchTerm }]}
            actions={
                    <Tooltip title="Reload data" placement="right" enterDelay={1000}>
                        <div>
                            <IconButton size="small" aria-label="refresh" onClick={handleRefresh}>
                                <RefreshIcon />
                            </IconButton>
                        </div>
                    </Tooltip>}
        >
            <VideoGrid videos={videos} />
        </PageContainer>
    </>
  );
};

export default SearchFeed;
