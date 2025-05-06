import { KeySignature } from "../models/KeySignature";

export interface IKeySignatureAction {
  payload: string;
  type: IChosenKeySignatureActionType;
}

export enum IChosenKeySignatureActionType {
  ADDED,
  RESET,
}

export const ChosenKeyReducer = (
  chosenKeyState: KeySignature,
  action: IKeySignatureAction
): KeySignature => {
  switch (action.type) {
    case IChosenKeySignatureActionType.ADDED: {
      const parsed = JSON.parse(action.payload);
      return new KeySignature(parsed.key, parsed.notes, parsed.minorParallel);
    }
    case IChosenKeySignatureActionType.RESET: {
      const parsed = JSON.parse(action.payload);
      return new KeySignature(parsed.key, parsed.notes, parsed.minorParallel);
    }
  }
  return chosenKeyState;
};
