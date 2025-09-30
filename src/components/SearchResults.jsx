import { useSelector } from "react-redux"
import { VideoList } from "./VideoList";
export function SearchResults() {
    const searchResults = useSelector((store) => store.searchResults);
    // console.log("searchresult");
    // console.log(searchResults)
    if (!searchResults || searchResults.length < 1){
        return (
            <div>
                <h2 className="text-2xl text-white justify-center flex">Search results powered by AI. It can make mistakes.</h2>
            </div>)

    }

    return (
        <div>
            <div className=" z-20">
                {searchResults.map((resultRow, index) => (
                    <VideoList title={""} shows={resultRow} />
                ))}

            </div>
        </div>
    )
}