import { Link } from "react-router-dom";
import { Slider } from "../components/Slider";
import { buttonStyle } from "../buttonStyle";

export const Home = () => {
  return (
    <>
    <Slider></Slider>
      <ul className="flex gap-5 justify-center p-5 items-center h-dvh">
        <li>
          <Link className={`${buttonStyle}`} to={"/parallels_exercise"}>Parallels Exercise</Link>
        </li>
        <li>
          <Link className={`${buttonStyle}`} to={"/note_exercise"}>Note Exercise</Link>
        </li>
        <li>
          <Link className={`${buttonStyle}`} to={"/scale_exercise"}>Scale Exercise</Link>
        </li>
      </ul>
      
    </>
  );
};
