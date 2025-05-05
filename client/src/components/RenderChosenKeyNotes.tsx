import { useEffect, useState } from "react";

interface IRenderChosenKeyNotesProps {
  chosenKeyNotes: string[];
  chosenKeyNoteNumbers: number[];
  currentKey: string;
}

export const RenderChosenKeyNotes = ({
  currentKey,
  chosenKeyNotes,
  chosenKeyNoteNumbers,
}: IRenderChosenKeyNotesProps) => {
  const [noteClicked, setNoteClicked] = useState<string>("");
  const [numberClicked, setNumberClicked] = useState<number>(8);
  const [chosenKeyNotesShuffled, setChosenKeyNotesShuffled] = useState<
    string[]
  >([]);

  const [correctNotes, setCorrectNotes] = useState<string[]>([]);
  const [correctNumbers, setCorrectNumbers] = useState<number[]>([]);
  const [incorrectCounter, setIncorrectCounter] = useState<number>(0);

  const [isComboCorrect, setIsComboCorrect] = useState<string>("waiting");

  const handleNoteClick = (note: string) => {
    setNoteClicked(note);
  };
  const handleNumberClick = (number: number) => {
    setNumberClicked(number);
  };

  const noteClickedSplit = noteClicked.split("_").pop();

  const green = "#46f800";

  const red = "#d30000";

  const blue = "#222dff";

  useEffect(() => {
    if (numberClicked !== 8 && noteClicked !== "") {
      if (+noteClickedSplit! === numberClicked) {
        setIsComboCorrect("correct");
        // Add the note to the correct list if it's not already there
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
    setNoteClicked("");
    setNumberClicked(8);
  }, [chosenKeyNotes]);

  const handleRestartClick = () => {
    setCorrectNotes([]);
    setCorrectNumbers([]);
    setIncorrectCounter(0);
    setNoteClicked("");
    setNumberClicked(8);
    setChosenKeyNotesShuffled(shuffle(chosenKeyNotes))
  };

  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setChosenKeyNotesShuffled(shuffle(chosenKeyNotes));
  }, [chosenKeyNotes, chosenKeyNoteNumbers]);

  return (
    <>
      <div className="flex justify-between m-3">
        <div>
          <div>You've been wrong {incorrectCounter} times</div>
          {incorrectCounter >= 3 && incorrectCounter <= 5 ? (
            <div>you suck</div>
          ) : incorrectCounter > 5 && incorrectCounter <= 7 ? (
            <div>you really suck</div>
          ) : incorrectCounter > 7 ? (
            <div>you really fucking suck</div>
          ) : correctNotes.length === 7 ? (
            <div>you win!</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="flex flex-col h-dvh items-center gap-10">
        <div>Currently in the key of: {currentKey.split("_", 1)}</div>
        <div className="flex gap-10">
          {chosenKeyNotesShuffled.map((chosenKeyNote, index) => (
            <div key={index}>
              <button
                disabled={correctNotes.length === 7}
                style={{
                  borderColor: correctNotes.includes(chosenKeyNote)
                    ? green
                    : chosenKeyNote === noteClicked
                    ? blue
                    : chosenKeyNote === noteClicked &&
                      isComboCorrect === "incorrect"
                    ? red
                    : "",
                }}
                onClick={() => handleNoteClick(chosenKeyNote)}
              >
                {chosenKeyNote.split("_", 1)}
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-10">
          {chosenKeyNoteNumbers.map((chosenKeyNoteNumber, index) => (
            <div key={index}>
              <button
                disabled={correctNotes.length === 7}
                style={{
                  borderColor: correctNumbers.includes(chosenKeyNoteNumber)
                    ? green
                    : chosenKeyNoteNumber === numberClicked
                    ? blue
                    : "",
                }}
                onClick={() => handleNumberClick(chosenKeyNoteNumber)}
              >
                {chosenKeyNoteNumber}
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleRestartClick}>Restart</button>
      </div>
    </>
  );
};
