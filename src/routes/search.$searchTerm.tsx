import { SearchFeed } from "@/components"
import { SearchPill } from "@/components/search_pill/SearchPill"
import {categories} from "@/utils/constants";
import {getVideos} from "@/utils/axiosClient";
import {type LoaderFunctionArgs, useLoaderData} from "react-router";
import invariant from "tiny-invariant";

export const loader = async ({params}: LoaderFunctionArgs) => {
    invariant(params.searchTerm, "Missing searchTerm param");
    const searchTerm   = params.searchTerm;
    const cat = categories.find(cat => cat.title === searchTerm);
    const url = `${cat?.name}`;
    const data  = await getVideos(url);
    // @ts-ignore
    const { contents } = data;
    return { contents, searchTerm };
};


function SearchFeedPage() {
    const {contents, searchTerm} = useLoaderData<typeof loader>();

  return (
    <>
        <SearchPill categories={categories} />
        <SearchFeed videos={contents} searchTerm={searchTerm}/>
    </>
  )
}

export default SearchFeedPage;