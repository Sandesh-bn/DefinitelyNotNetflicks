import { IMAGE_URL } from "../utils/constants";

export function VideoCard({ posterPath }){
    return(
        <div className="w-40">
            <img src={IMAGE_URL + posterPath}/>
        </div>
    )
}