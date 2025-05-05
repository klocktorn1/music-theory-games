import { RenderKeySignatures } from "../components/RenderKeySignatures"

export const NoteExercise = () => {

    return (
        <>
        <div>Welcome to the note exercise! Start by pressing any of the keys below. The goal is to determine what scale degree each note has.</div>
            <RenderKeySignatures></RenderKeySignatures>
        </>
    )
}