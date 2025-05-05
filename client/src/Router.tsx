import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NoteExercise } from "./pages/NoteExercise";
import { ParallelsExercise } from "./pages/ParallelsExercise";
import { MinorParallels } from "./pages/MinorParallels";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/note_exercise",
                element: <NoteExercise></NoteExercise>
            },
            {
                path: "/parallels_exercise",
                element: <ParallelsExercise></ParallelsExercise>
            },
            {
                path: "/minor_parallels",
                element: <MinorParallels></MinorParallels>
            }

        ]
    }
])