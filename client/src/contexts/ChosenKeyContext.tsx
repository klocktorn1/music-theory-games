import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import { KeySignature } from "../models/KeySignature";
import { ChosenKeyReducer, IKeySignatureAction } from "../reducers/ChosenKeyReducer";

export interface IKeySignatureContext {
  chosenKey: KeySignature;
  chosenKeyDispatch: Dispatch<IKeySignatureAction>;
}  

export const ChosenKeyContext = createContext<IKeySignatureContext>({
    chosenKey: new KeySignature("", [], ""),
    chosenKeyDispatch: () => {
    return;
  },
});


export const ChosenKeyProvider = ({children}: PropsWithChildren) => {
  const [chosenKey, chosenKeyDispatch] = useReducer(ChosenKeyReducer, new KeySignature("", [], ""))

  return (
    <ChosenKeyContext.Provider value={{ chosenKey, chosenKeyDispatch }}>
      {children} 
    </ChosenKeyContext.Provider>
  )
}
