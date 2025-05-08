import { useContext, useEffect } from "react";
import { RenderNotesExercise } from "../components/RenderNotesExercise";
import { RenderKeySignatures } from "../components/RenderKeySignatures";
import { ChosenKeyContext } from "../contexts/ChosenKeyContext";
import { IChosenKeySignatureActionType } from "../reducers/ChosenKeyReducer";
import { KeySignature } from "../models/KeySignature";
import { Link } from "react-router-dom";

export const NoteExercise = () => {
  const { chosenKey, chosenKeyDispatch } = useContext(ChosenKeyContext);

  useEffect(() => {
    chosenKeyDispatch({
      type: IChosenKeySignatureActionType.RESET,
      payload: JSON.stringify(new KeySignature("", [], "")),
    });
  }, []);

  return (
    <>
      <Link to={"/"}>Go back to home</Link>

      {chosenKey.notes.length > 0 ? (
        <RenderNotesExercise></RenderNotesExercise>
      ) : (
        <div>
          Welcome to the note exercise! Start by pressing any of the keys below.
          The goal is to determine what scale degree each note has.
          <RenderKeySignatures></RenderKeySignatures>
        </div>
      )}
    </>
  );
};
