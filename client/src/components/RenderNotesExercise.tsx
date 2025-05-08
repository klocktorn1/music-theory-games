import { useContext, useEffect, useState } from "react";
import { ChosenKeyContext } from "../contexts/ChosenKeyContext";
import { IChosenKeySignatureActionType } from "../reducers/ChosenKeyReducer";
import { KeySignature } from "../models/KeySignature";
import { Info } from "lucide-react";
import { Button, Tooltip } from "flowbite-react";
import { buttonStyle } from "../buttonStyle";

interface INoteWithIndex {
  note: string;
  originalIndex: number;
}

export const RenderNotesExercise = ({}) => {
  const { chosenKey, chosenKeyDispatch } = useContext(ChosenKeyContext);

  const [noteClicked, setNoteClicked] = useState<number>(7);
  const [numberClicked, setNumberClicked] = useState<number>(7);
  const [shuffledNotes, setShuffledNotes] = useState<INoteWithIndex[]>([]);

  const [correctNotes, setCorrectNotes] = useState<number[]>([]);
  const [correctNumbers, setCorrectNumbers] = useState<number[]>([]);

  const [incorrectCounter, setIncorrectCounter] = useState<number>(0);
  const [isComboCorrect, setIsComboCorrect] = useState<string>("waiting");

  const noteExerciseInfo: string =
    "Press one of the notes on the top and then press the corresponding scale degree for that note. (Example if you are in the key of C: C = 1, D = 2 and so on";

  const handleNoteClick = (noteIndex: number) => {
    setNoteClicked(noteIndex);
  };
  const handleNumberClick = (number: number) => {
    setNumberClicked(number);
  };

  const noteIndexes: number[] = chosenKey.notes.map((_, index) => index);

  const green = "#46f800";

  const red = "#d30000";

  const blue = "#222dff";

  useEffect(() => {
    if (numberClicked !== 7 && noteClicked !== 7) {
      if (noteClicked === numberClicked) {
        setIsComboCorrect("correct");
        setCorrectNotes((prev) =>
          prev.includes(noteClicked) ? prev : [...prev, noteClicked]
        );
        setCorrectNumbers((prev) =>
          prev.includes(numberClicked) ? prev : [...prev, numberClicked]
        );
      } else if (isComboCorrect === "correct") {
        setIsComboCorrect("waiting");
      } else {
        setIncorrectCounter(incorrectCounter + 1);
        setIsComboCorrect("incorrect");
      }
    }
  }, [noteClicked, numberClicked]);

  useEffect(() => {
    setCorrectNotes([]);
    setCorrectNumbers([]);
    setIncorrectCounter(0);
    setNoteClicked(7);
    setNumberClicked(7);
    const notesWithIndex = chosenKey.notes.map((note, index) => ({
      note,
      originalIndex: index,
    }));
    const shuffled = [...notesWithIndex].sort(() => Math.random() - 0.5);
    setShuffledNotes(shuffled);
  }, [chosenKey]);

  const handleRestartClick = () => {
    setCorrectNotes([]);
    setCorrectNumbers([]);
    setIncorrectCounter(0);
    setNoteClicked(7);
    setNumberClicked(7);
    const notesWithIndex = chosenKey.notes.map((note, index) => ({
      note,
      originalIndex: index,
    }));
    const shuffled = [...notesWithIndex].sort(() => Math.random() - 0.5);
    setShuffledNotes(shuffled);
  };

  const handleChangeKeyClick = () => {
    chosenKeyDispatch({
      type: IChosenKeySignatureActionType.RESET,
      payload: JSON.stringify(new KeySignature("", [], "")),
    });
  };

  return (
    <>
      <div className="flex justify-between m-3">
        <div>
          <div>You've been wrong {incorrectCounter} times</div>
          {/* {incorrectCounter >= 3 && incorrectCounter <= 5 ? (
            <div>you suck</div>
          ) : incorrectCounter > 5 && incorrectCounter <= 7 ? (
            <div>you really suck</div>
          ) : incorrectCounter > 7 ? (
            <div>you really fucking suck</div>
          ) : correctNotes.length === 7 ? (
            <div>you win!</div>
          ) : (
            <div></div>
          )} */}
          <div>You've been right {correctNotes.length} times</div>

          {correctNotes.length === 7 && (
            <div>
              <b>You win!</b>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col h-dvh items-center gap-10">
        <div>Currently in the key of: {chosenKey.key}</div>
        <div className="flex gap-10">
          {shuffledNotes.map(({ note, originalIndex }) => (
            <div key={originalIndex}>
              <button
                className={`${buttonStyle}`}
                disabled={correctNotes.length === 7}
                style={{
                  borderColor: correctNotes.includes(originalIndex)
                    ? green
                    : originalIndex === noteClicked
                    ? blue
                    : isComboCorrect === "incorrect" &&
                      originalIndex === noteClicked
                    ? red
                    : "",
                }}
                onClick={() => handleNoteClick(originalIndex)}
              >
                {note}
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-10">
          {noteIndexes.map((_, index) => (
            <div key={index}>
              <button
                className={`${buttonStyle}`}
                disabled={correctNotes.length === 7}
                style={{
                  borderColor: correctNumbers.includes(index)
                    ? green
                    : index === numberClicked
                    ? blue
                    : "",
                }}
                onClick={() => handleNumberClick(index)}
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <button className={`${buttonStyle}`} onClick={() => handleChangeKeyClick()}>Change key</button>
          <button className={`${buttonStyle}`} onClick={handleRestartClick}>
            Restart
          </button>{" "}
          <Tooltip content={`${noteExerciseInfo}`} animation="duration-400">
            <Button>
              <Info className="text-gray-600 hover:cursor-pointer hover:opacity-50 duration-200 ease-in-out"></Info>
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
