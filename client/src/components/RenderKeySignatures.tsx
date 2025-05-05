import { useContext, useState } from "react";
import { KeySignaturesContext } from "../contexts/KeySignaturesContext";
import { RenderChosenKeyNotes } from "./RenderChosenKeyNotes";


export const RenderKeySignatures = () => {
  const { keySignatures } = useContext(KeySignaturesContext);

  const [chosenKeyNotes, setChosenKeyNotes] = useState<string[]>([]);
  const [currentKey, setCurrentKey] = useState<string>("")


  const handleNoteClick = (notes: string[], key: string) => {
    setChosenKeyNotes(notes);
    setCurrentKey(key)
  };


  
  const handleRandomizeClick = () => {
    const randomKey = keySignatures[Math.floor(Math.random() * keySignatures.length)]    
    setChosenKeyNotes(randomKey.notes)
    setCurrentKey(randomKey.name)
    
  }
  

  return (
    <>
      <div className="flex justify-between m-3">
        {keySignatures.map((keySignature, index) => (
          <div key={index}>
            <button
              onClick={() => {
                handleNoteClick(keySignature.notes, keySignature.name);
              }}
            >
              {keySignature.name}
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleRandomizeClick}>Randomize key</button>
      {chosenKeyNotes.length > 0 && (
        <RenderChosenKeyNotes
          currentKey={currentKey}
          chosenKeyNotes={chosenKeyNotes}
        ></RenderChosenKeyNotes>
      )}
      
    </>
  );
};
