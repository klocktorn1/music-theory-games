import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NoteExercise } from "./pages/NoteExercise";
import { ParallelsExercise } from "./pages/ParallelsExercise";
import { MinorParallelExercise } from "./pages/MinorParallelExercise";
import { ScaleExercise } from "./pages/ScaleEcercise";

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
                element: <MinorParallelExercise></MinorParallelExercise>
            },
            {
                path: "/scale_exercise",
                element: <ScaleExercise></ScaleExercise>
            }

        ]
    }
])