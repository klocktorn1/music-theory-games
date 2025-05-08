import { NavLink } from "react-router-dom";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <>
    <Slider></Slider>
      <ul className="flex gap-5 justify-center p-5 items-center h-dvh">
        <li>
          <NavLink to={"/parallels_exercise"}>Parallels Exercise</NavLink>
        </li>
        <li>
          <NavLink to={"/note_exercise"}>Note Exercise</NavLink>
        </li>
        <li>
          <NavLink to={"/scale_exercise"}>Scale Exercise</NavLink>
        </li>
      </ul>
      
    </>
  );
};
