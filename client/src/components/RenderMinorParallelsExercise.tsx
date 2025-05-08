import { useContext, useState } from "react";
import { KeySignaturesContext } from "../contexts/KeySignaturesContext";
import { KeySignature } from "../models/KeySignature";
import { buttonStyle } from "../buttonStyle";

export const RenderMinorParallelsExercise = () => {
  const { keySignatures } = useContext(KeySignaturesContext);

  const [randomKey, setRandomKey] = useState<KeySignature>(
    keySignatures[Math.floor(Math.random() * keySignatures.length)]
  );

  const handleMinorParallelsClick = (minorParallel: string) => {
    console.log(randomKey.minorParallel);

    if (minorParallel === randomKey.minorParallel) {
      alert("Correct!");
      setRandomKey(
        keySignatures[Math.floor(Math.random() * keySignatures.length)]
      );
    } else {
      console.log("Wrong!");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 mt-5">
        <p>
          Which is the minor parallel of <b>{randomKey.key}</b> major?
        </p>
        <div>
          <div className="flex flex-wrap gap-3">
            {keySignatures.map((keySignature, index) => (
              <button
                className={`${buttonStyle}`}
                onClick={() => {
                  handleMinorParallelsClick(keySignature.minorParallel);
                }}
                key={index}
              >
                {keySignature.minorParallel} minor
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
