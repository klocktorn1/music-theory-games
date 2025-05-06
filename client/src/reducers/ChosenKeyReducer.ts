import { KeySignature } from "../models/KeySignature";


export interface IKeySignatureAction {
  payload: string;
  type: IChosenKeySignatureActionType;
}

export enum IChosenKeySignatureActionType {
  ADDED,
  RESET
}

export const ChosenKeyReducer = (
  chosenKeyState: KeySignature,
  action: IKeySignatureAction
): KeySignature => {
  switch (action.type) {
    case IChosenKeySignatureActionType.ADDED: {
        return chosenKeyState = JSON.parse(action.payload)
    }
    case IChosenKeySignatureActionType.RESET: {
        return chosenKeyState = JSON.parse(action.payload)
    }
  }
  return chosenKeyState;
};
