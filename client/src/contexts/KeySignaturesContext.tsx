import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { KeySignature } from "../models/KeySignature";
import { getAllKeys } from "../services/keySignaturesService";

export interface IKeySignaturesContext {
  keySignatures: KeySignature[];
}

export const KeySignaturesContext = createContext<IKeySignaturesContext>({
  keySignatures: [],
});

export const KeySignaturesProvider = ({ children }: PropsWithChildren) => {
  const [keySignatures, setKeySignatures] = useState<KeySignature[]>([]);

  useEffect(() => {
    const getAll = async () => {
      const response: KeySignature[] = await getAllKeys();
      setKeySignatures(response);
    };

    getAll();
  }, []);

  return (
    <KeySignaturesContext.Provider value={{ keySignatures }}>
      {children}
    </KeySignaturesContext.Provider>
  );
};
