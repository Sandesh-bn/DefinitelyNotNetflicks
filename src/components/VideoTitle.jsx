

export function VideoTitle({ title, overview }){
    return(
        <div className="pt-[15%] px-20 absolute bg-gradient-to-r from-black w-full aspect-video">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="py-6 text-lg w-1/2 text-white">{overview}</p>
            <div className="">
                <button className="bg-gray-200 text-gray-800 p-4 px-12 text-lg hover:bg-white">
                     ▶︎ Play
                </button>
                <button className="mx-2 bg-gray-700 text-white p-4 px-12 text-lg hover:bg-opacity-80">
                    ⓘ More Info</button>
            </div>
        </div>
    )
}