import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { buttonStyle } from "../buttonStyle";

interface IExercise {
  link: string,
  name: string
}

export const Slider = () => {
  const [index, setIndex] = useState<number>(0);
  const exercises: IExercise[] = [
    {
      link: "note_exercise",
      name: "Note Exercise",
    },
    {
      link: "scale_exercise",
      name: "Scale Exercise",
    },
    {
      link: "parallels_exercise",
      name: "Parallels Exercise",
    }
  ];
  console.log(exercises);

  const slideStyle = {
    transform: `translateX(${-100 * index}%)`,
  };

  const buttonStyling =
    "hover:bg-black hover:opacity-50 block absolute top-0 bottom-0 p-1 cursor-pointer text-[#232323] duration-300 ease-in-out";

  const showNextImage = () => {
    setIndex((index) => (index === exercises.length - 1 ? 0 : index + 1));
  };

  const showPreviousImage = () => {
    setIndex((index) => (index === 0 ? exercises.length - 1 : index - 1));
  };

  return (
    <>
      {exercises.length > 0 && (
        <div className="h-full relative overflow-hidden md:w-1/2 md:m-auto">
          {/* Slider Container */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out m-3"
            style={slideStyle}
          >
            {exercises.map((exercise, i) => (
              <Link
                key={i}
                to={`/${exercise.link}`}
                className="flex-shrink-0 w-full flex justify-center"
              >
                <button className={`${buttonStyle}`}>{exercise.name}</button>
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={showPreviousImage}
            className={`${buttonStyling} left-0 `}
          >
            <ArrowBigLeft />
          </button>
          <button
            onClick={showNextImage}
            className={`${buttonStyling} right-0 `}
          >
            <ArrowBigRight />
          </button>
        </div>
      )}
    </>
  );
};
