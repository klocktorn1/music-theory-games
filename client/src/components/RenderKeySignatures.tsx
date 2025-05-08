import { useContext } from "react";
import { KeySignaturesContext } from "../contexts/KeySignaturesContext";
import { KeySignature } from "../models/KeySignature";
import { ChosenKeyContext } from "../contexts/ChosenKeyContext";
import { IChosenKeySignatureActionType } from "../reducers/ChosenKeyReducer";
import { buttonStyle } from "../buttonStyle";

export const RenderKeySignatures = () => {
  const { keySignatures } = useContext(KeySignaturesContext);

  const { chosenKeyDispatch } = useContext(ChosenKeyContext);

  const handleKeyClick = (
    key: string,
    notes: string[],
    minorParallel: string
  ) => {
    chosenKeyDispatch({
      type: IChosenKeySignatureActionType.ADDED,
      payload: JSON.stringify(new KeySignature(key, notes, minorParallel)),
    });
  };

  const handleRandomizeClick = () => {
    const randomKey =
      keySignatures[Math.floor(Math.random() * keySignatures.length)];

      const constructed = new KeySignature(
        randomKey.key,
        randomKey.notes,
        randomKey.minorParallel
      );
      
    chosenKeyDispatch({
      type: IChosenKeySignatureActionType.ADDED,
      payload: JSON.stringify(constructed),
    });
  };

  return (
    <>
      <div className="flex justify-between m-3">
        {keySignatures.map((keySignature, index) => (
          <div key={index}>
            <button
            className={`${buttonStyle}`}
              onClick={() => {
                handleKeyClick(
                  keySignature.key,
                  keySignature.notes,
                  keySignature.minorParallel
                );
              }}
            >
              {keySignature.key}
            </button>
          </div>
        ))}
      </div>
      <button className={`${buttonStyle}`} onClick={handleRandomizeClick}>Randomize key</button>
    </>
  );
};
