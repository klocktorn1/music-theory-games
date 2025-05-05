import { createContext, PropsWithChildren } from "react";
import { IKeySignatures } from "../models/IKeySignatures";

export interface IKeySignaturesContext {
  keySignatures: IKeySignatures[];
}

export const KeySignaturesContext = createContext<IKeySignaturesContext>({
  keySignatures: [],
});

export const KeySignaturesProvider = ({ children }: PropsWithChildren) => {
  const keySignatures: IKeySignatures[] = [
    {
      name: "C",
      notes: ["C", "D", "E", "F", "G", "A", "B"],
      minorParallel: "A",
    },
    {
      name: "G",
      notes: ["G", "A", "B", "C", "D", "E", "F♯"],
      minorParallel: "E",
    },
    {
      name: "D",
      notes: ["D", "E", "F♯", "G", "A", "B", "C♯"],
      minorParallel: "B",
    },
    {
      name: "A",
      notes: ["A", "B", "C♯", "D", "E", "F♯", "G♯"],
      minorParallel: "F♯",
    },
    {
      name: "E",
      notes: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"],
      minorParallel: "C♯",
    },
    {
      name: "B",
      notes: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"],
      minorParallel: "G♯",
    },
    {
      name: "F#",
      notes: ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"],
      minorParallel: "D♯",
    },
    {
      name: "C#",
      notes: ["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "B♯"],
      minorParallel: "A♯",
    },
    {
      name: "F",
      notes: ["F", "G", "A", "Bb", "C", "D", "E"],
      minorParallel: "D",
    },
    {
      name: "Bb",
      notes: ["Bb", "C", "D", "Eb", "F", "G", "A"],
      minorParallel: "G",
    },
    {
      name: "Eb",
      notes: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
      minorParallel: "C",
    },
    {
      name: "Ab",
      notes: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
      minorParallel: "F",
    },
    {
      name: "Db",
      notes: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
      minorParallel: "Bb",
    },
    {
      name: "Gb",
      notes: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
      minorParallel: "Eb",
    },
    {
      name: "Cb",
      notes: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
      minorParallel: "Ab",
    },
  ];

  return (
    <KeySignaturesContext.Provider value={{ keySignatures }}>
      {children}
    </KeySignaturesContext.Provider>
  );
};
