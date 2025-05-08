import { useContext, useEffect } from "react";
import { RenderKeySignatures } from "../components/RenderKeySignatures";
import { IChosenKeySignatureActionType } from "../reducers/ChosenKeyReducer";
import { KeySignature } from "../models/KeySignature";
import { ChosenKeyContext } from "../contexts/ChosenKeyContext";
import { RenderScaleExercise } from "../components/RenderScaleExercise";
import { Link } from "react-router-dom";
import { buttonStyle } from "../buttonStyle";

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
      <Link to={"/"}>
        <button className={`${buttonStyle}`}>Back to home</button>
      </Link>

      <div>
        {chosenKey.notes.length > 0 ? (
          <RenderScaleExercise></RenderScaleExercise>
        ) : (
          <div>
            <div>Welcome to the scale exercise! Pick a key signature and a notes from a scale will appear. Now choose the corresponding scale which includes those notes.</div>
            <div>Pick a key:</div>
            <RenderKeySignatures></RenderKeySignatures>
          </div>
        )}
      </div>
    </>
  );
};
