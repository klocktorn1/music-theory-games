import { useContext } from "react"
import { KeySignaturesContext } from "../contexts/KeySignaturesContext"
import { RenderKeySignatures } from "../components/RenderKeySignatures"

export const ScaleExercise = () => {

    const {keySignatures} = useContext(KeySignaturesContext)
    
    return (
        <>
            <div>Pick a key:</div>
            <div>
                <RenderKeySignatures></RenderKeySignatures>
            </div>
            
        
        </>
    )
}