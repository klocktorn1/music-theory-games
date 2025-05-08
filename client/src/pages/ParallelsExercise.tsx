
import { Link } from "react-router-dom";

export const ParallelsExercise = () => {



  return (
    <>

          <div>
            Welcome to the Parallels exercise! Start by choosing minor or major
            paralells. The goal is to determine which minor or majjor parallel
            the given note has.
          </div>
          <Link to={"/"}>Go back to home</Link>

          <div className="flex gap-6 justify-center mt-20">
            <Link to={"/minor_parallels"}><button>Minor parallels</button></Link>
            <Link to={"/major_parallels"}><button>Major parallels</button></Link>
          </div>

          

    </>
  );
};
