import { Link } from "react-router-dom";
import { RenderMinorParallelsExercise } from "../components/RenderMinorParallelsExercise";
import { buttonStyle } from "../buttonStyle";


export const MinorParallelExercise = () => {


  return (
    <>
      <Link to={"/"}>
        <button className={`${buttonStyle}`}>Back to home</button>
      </Link>


      <RenderMinorParallelsExercise></RenderMinorParallelsExercise>
    </>
  );
};
