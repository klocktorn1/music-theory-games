import { useContext, useEffect } from "react";
import { RenderKeySignatures } from "../components/RenderKeySignatures";
import { IChosenKeySignatureActionType } from "../reducers/ChosenKeyReducer";
import { KeySignature } from "../models/KeySignature";
import { ChosenKeyContext } from "../contexts/ChosenKeyContext";
import { RenderScaleExercise } from "../components/RenderScaleExercise";

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
      <div>
        <RenderKeySignatures></RenderKeySignatures>
              {chosenKey.notes.length > 0 && (
                <RenderScaleExercise></RenderScaleExercise>
              )}
      </div>
    </>
  );
};
