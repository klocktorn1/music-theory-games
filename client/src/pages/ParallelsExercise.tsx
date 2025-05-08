
import { Link } from "react-router-dom";
import { buttonStyle } from "../buttonStyle";

export const ParallelsExercise = () => {



  return (
    <>

          <div>
            Welcome to the Parallels exercise! Start by choosing minor or major
            parallels. The goal is to determine which minor or major parallel
            the given note has.
          </div>
          <Link to={"/"}><button className={`${buttonStyle}`}>Back to home</button></Link>

          <div className="flex gap-6 justify-center mt-20">
            <Link to={"/minor_parallels"}><button className={`${buttonStyle}`}>Minor parallels</button></Link>
            <Link to={"/major_parallels"}><button className={`${buttonStyle}`}>Major parallels</button></Link>
          </div>

          

    </>
  );
};
