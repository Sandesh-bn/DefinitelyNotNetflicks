import { Playlist } from "./PlayList";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from "./Login";

export function Body() {
    console.log("Welcome 2 Netflix")
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Playlist />
        }
    ]);

    

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}