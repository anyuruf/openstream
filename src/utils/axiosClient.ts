import axios, {type AxiosError, type AxiosResponse} from 'axios';
import {VideoDetailType} from "@/types/videoDetail";
import {ResultDataType} from "@/types/Search";

export const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
        maxResults: 53,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_API_HOST,
    },
};

const apiClient  = axios.create(options);

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response.data;
    },
    (err: AxiosError) => {
        // handle error
        console.log(err);
    }
);

export async function getVideos(queryString: string ) : Promise<AxiosResponse<ResultDataType>> {
    const url = `${BASE_URL}/search?part=snippet&q=${queryString}&hl=en&gl=US`;
    return await apiClient.get(url);
}

export async function getVideoDetail (queryString : string): Promise<AxiosResponse<VideoDetailType>>{
    const url = `${BASE_URL}/video/details/?part=snippet&id=${queryString}&hl=en&gl=US`;
    return await apiClient.get(url);

}

export const getPlaylist = (id : string) =>
    apiClient.get(`playlistItems?part=snippet&playlistId=${id}`);
