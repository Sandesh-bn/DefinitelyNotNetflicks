import { VideoCard } from "./VideoCard";

export function VideoList({ title, shows }) {
    return (
        <div className="px-6 bg-black">
            <h2 className="text-2xl py-6 text-gray-300">{title}</h2>
            <div className="flex overflow-x-scroll no-scrollbar">

                <div className="flex">
                    {shows && Array.isArray(shows) && shows.map((show, index) => (
                        <VideoCard key={show.id} posterPath={show.poster_path} />
                    ))}
                </div>

            </div>
        </div>
    )
}