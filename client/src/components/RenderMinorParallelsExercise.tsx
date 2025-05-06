import { useContext, useState } from "react";
import { KeySignaturesContext } from "../contexts/KeySignaturesContext";
import { KeySignature } from "../models/KeySignature";

export const RenderMinorParallelsExercise = () => {
  const { keySignatures } = useContext(KeySignaturesContext);

  const [randomKey, setRandomKey] = useState<KeySignature>(keySignatures[Math.floor(Math.random() * keySignatures.length)])

    


  const handleMinorParallelsClick = (minorParallel: string) => {
    console.log(randomKey.minorParallel);
    
    if (minorParallel === randomKey.minorParallel) {
        console.log("Correct!");
        setRandomKey(keySignatures[Math.floor(Math.random() * keySignatures.length)])
    } else {
        console.log("Wrong!");
        
    }
  }

  return (
    <>
      <div>Minor Parallels Game</div>

      <div>
        <p>{randomKey.name}</p>
        <div>
          Minor parallels:
          <div className="flex flex-wrap gap-3">
            {keySignatures.map((keySignature, index) => (
              <button onClick={() => {handleMinorParallelsClick(keySignature.minorParallel)}} key={index}>{keySignature.minorParallel} minor</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
