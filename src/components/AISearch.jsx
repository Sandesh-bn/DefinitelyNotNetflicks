import { SearchResults } from "./SearchResults";
import { SearchBar } from "./SearchBar";
import LoginBackground from '../assets/login.jpeg';

export function AISearch() {
    return (
        <div>
            <div className="absolute w-full -z-10">
                <img className="w-full h-screen object-cover" src={LoginBackground} />
            </div>
            <SearchBar />
            <SearchResults />
        </div>
    )
}