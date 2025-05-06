export interface IKeySignatures {
  name: string;
  notes: string[];
  minorParallel: string;
}

export class KeySignature {
  key: string;
  notes: string[];
  minorParallel: string;

  constructor(name: string, notes: string[], minorParallel: string) {
    this.key = name;
    this.notes = notes;
    this.minorParallel = minorParallel;
  }

  dorian() {    
    const newNotes = [...this.notes];

    if (newNotes[2].includes("♯")) {
      newNotes[2] = `${this.notes[2].replace("♯", "")}`;
    } else {
      newNotes[2] = `${this.notes[2]}b`;
    }

  
    if (newNotes[6].includes("♯")) {
      newNotes[6] = `${this.notes[6].replace("♯", "")}`;
    } else {
      newNotes[6] = `${this.notes[6]}b`;
    }


    console.log("Ionian:", this.notes);
    console.log("Dorian:", newNotes); 

    return `The ${this.key} dorian scale is: ${newNotes}`
  }
}

