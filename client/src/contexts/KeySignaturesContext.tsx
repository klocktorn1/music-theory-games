import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { IKeySignatures } from "../models/IKeySignatures";
import { getAllKeys } from "../services/keySignaturesService";

export interface IKeySignaturesContext {
  keySignatures: IKeySignatures[];
}

export const KeySignaturesContext = createContext<IKeySignaturesContext>({
  keySignatures: [],
});

export const KeySignaturesProvider = ({ children }: PropsWithChildren) => {
  const [keySignatures, setKeySignatures] = useState<IKeySignatures[]>([]);

  useEffect(() => {
    const getAll = async () => {
      const response: IKeySignatures[] = await getAllKeys();
      setKeySignatures(response);
      console.log(response);
    };

    getAll();
  }, []);

  return (
    <KeySignaturesContext.Provider value={{ keySignatures }}>
      {children}
    </KeySignaturesContext.Provider>
  );
};
