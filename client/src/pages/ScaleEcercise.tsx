import { useContext, useEffect } from "react";
import { RenderKeySignatures } from "../components/RenderKeySignatures";
import { IChosenKeySignatureActionType } from "../reducers/ChosenKeyReducer";
import { KeySignature } from "../models/KeySignature";
import { ChosenKeyContext } from "../contexts/ChosenKeyContext";
import { RenderScaleExercise } from "../components/RenderScaleExercise";
import { Link } from "react-router-dom";

export const ScaleExercise = () => {
  const { chosenKey, chosenKeyDispatch } = useContext(ChosenKeyContext);
  useEffect(() => {
    chosenKeyDispatch({
      type: IChosenKeySignatureActionType.RESET,
      payload: JSON.stringify(new KeySignature("", [], "")),
    });
  }, []);

  return (
    <>
      <div>Pick a key:</div>
      <Link to={"/"}>Go back to home</Link>

      <div>
        {chosenKey.notes.length > 0 ? (
          <RenderScaleExercise></RenderScaleExercise>
        ) : (
          <RenderKeySignatures></RenderKeySignatures>
        )}
      </div>
    </>
  );
};
