import { useContext } from "react"
import { ChosenKeyContext } from "../contexts/ChosenKeyContext"

export const RenderScaleExercise = () => {


    const {chosenKey} = useContext(ChosenKeyContext)



    const dorian: string = chosenKey.dorian()
    
    console.log(dorian);
    
    return (
        <>

            <div>
                    {chosenKey.notes}
                    <div>{dorian}</div>

                
            
            </div>

        
        </>
    )
}