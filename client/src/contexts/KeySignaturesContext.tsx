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
      notes: ["C_1", "D_2", "E_3", "F_4", "G_5", "A_6", "B_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "A",
    },
    {
      name: "G",
      notes: ["G_1", "A_2", "B_3", "C_4", "D_5", "E_6", "F♯_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "E",
    },
    {
      name: "D",
      notes: ["D_1", "E_2", "F♯_3", "G_4", "A_5", "B_6", "C♯_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "B",
    },
    {
      name: "A",
      notes: ["A_1", "B_2", "C♯_3", "D_4", "E_5", "F♯_6", "G♯_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "F♯",
    },
    {
      name: "E",
      notes: ["E_1", "F♯_2", "G♯_3", "A_4", "B_5", "C♯_6", "D♯_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "C♯",
    },
    {
      name: "B",
      notes: ["B_1", "C♯_2", "D♯_3", "E_4", "F♯_5", "G♯_6", "A♯_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "G♯",
    },
    {
      name: "F#",
      notes: ["F♯_1", "G♯_2", "A♯_3", "B_4", "C♯_5", "D♯_6", "E♯_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "D♯",
    },
    {
      name: "C#",
      notes: ["C♯_1", "D♯_2", "E♯_3", "F♯_4", "G♯_5", "A♯_6", "B♯_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "A♯",
    },
    {
      name: "F",
      notes: ["F_1", "G_2", "A_3", "Bb_4", "C_5", "D_6", "E_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "D",
    },
    {
      name: "Bb",
      notes: ["Bb_1", "C_2", "D_3", "Eb_4", "F_5", "G_6", "A_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "G",
    },
    {
      name: "Eb",
      notes: ["Eb_1", "F_2", "G_3", "Ab_4", "Bb_5", "C_6", "D_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "C",
    },
    {
      name: "Ab",
      notes: ["Ab_1", "Bb_2", "C_3", "Db_4", "Eb_5", "F_6", "G_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "F",
    },
    {
      name: "Db",
      notes: ["Db_1", "Eb_2", "F_3", "Gb_4", "Ab_5", "Bb_6", "C_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "Bb",
    },
    {
      name: "Gb",
      notes: ["Gb_1", "Ab_2", "Bb_3", "Cb_4", "Db_5", "Eb_6", "F_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "Eb",
    },
    {
      name: "Cb",
      notes: ["Cb_1", "Db_2", "Eb_3", "Fb_4", "Gb_5", "Ab_6", "Bb_7"],
      noteToNumber: [1, 2, 3, 4, 5, 6, 7],
      minorParallel: "Ab",
    }
  ];
  

  return (
    <KeySignaturesContext.Provider value={{ keySignatures }}>
      {children}
    </KeySignaturesContext.Provider>
  );
};
