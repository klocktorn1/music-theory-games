import { useContext, useEffect, useState } from "react";
import { ChosenKeyContext } from "../contexts/ChosenKeyContext";
import { IChosenKeySignatureActionType } from "../reducers/ChosenKeyReducer";
import { KeySignature } from "../models/KeySignature";

interface IChosenKeyScales {
  ionian: string[];
  dorian: string[];
  phrygian: string[];
  lydian: string[];
  mixolydian: string[];
  aeolian: string[];
  locrian: string[];
}

export const RenderScaleExercise = () => {
  const { chosenKey, chosenKeyDispatch } = useContext(ChosenKeyContext);
  const [incorrectCounter, setIncorrectCounter] = useState<number>(0);
  const [scales, setScales] = useState<string[]>([]);
  const [randomScale, setRandomScale] = useState<string>("");
  const [scaleNotes, setScaleNotes] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const chosenKeyScales: IChosenKeyScales = {
    ionian: chosenKey.notes,
    dorian: chosenKey.dorian(),
    phrygian: chosenKey.phrygian(),
    lydian: chosenKey.lydian(),
    mixolydian: chosenKey.mixolydian(),
    aeolian: chosenKey.aeolian(),
    locrian: chosenKey.locrian(),
  };

  useEffect(() => {
    const availableScales = Object.keys(chosenKeyScales);
    const random =
      availableScales[Math.floor(Math.random() * availableScales.length)];
    const notes = chosenKeyScales[random as keyof IChosenKeyScales];

    setIsCorrect(false);
    setScales(availableScales);
    setRandomScale(random);
    setScaleNotes(notes);
  }, [chosenKey, isCorrect]);

  const handleScaleClick = (scale: string) => {
    if (scale === randomScale) {
      setIncorrectCounter(0);
      setIsCorrect(true);
    } else {
      setIncorrectCounter(incorrectCounter + 1);
    }
  };

  const handleChangeKeyClick = () => {
    chosenKeyDispatch({
      type: IChosenKeySignatureActionType.RESET,
      payload: JSON.stringify(new KeySignature("", [], "")),
    });
  };

  return (
    <>
      <div>Current key: {chosenKey.key}</div>
      <div>
        <div>
          Which scale in the key of {chosenKey.key} contains these notes?
        </div>

        <div className="flex gap-4">
          {scaleNotes.map((note) => (
            <div>{note}</div>
          ))}
        </div>
        <div className="flex gap-4">
          {scales.map((scale, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  handleScaleClick(scale);
                }}
              >
                {scale}
              </button>
            </div>
          ))}
        </div>
        <div>You've been wrong {incorrectCounter} times</div>
        <div>
          <button
            onClick={() => {
              handleChangeKeyClick();
            }}
          >
            Choose a different key
          </button>
        </div>
      </div>
    </>
  );
};

// when getting the right scale it re renders by setting a state to true and then false setIsCorrect. feels like bad practice
