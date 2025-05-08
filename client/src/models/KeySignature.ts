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
    // b3 b7
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
    return newNotes;
  }

  phrygian() {
    // b2 b3 b6 b7
    const newNotes = [...this.notes];
    if (newNotes[1].includes("♯")) {
      newNotes[1] = `${this.notes[1].replace("♯", "")}`;
    } else {
      newNotes[1] = `${this.notes[1]}b`;
    }

    if (newNotes[2].includes("♯")) {
      newNotes[2] = `${this.notes[2].replace("♯", "")}`;
    } else {
      newNotes[2] = `${this.notes[2]}b`;
    }

    if (newNotes[5].includes("♯")) {
      newNotes[5] = `${this.notes[5].replace("♯", "")}`;
    } else {
      newNotes[5] = `${this.notes[5]}b`;
    }

    if (newNotes[6].includes("♯")) {
      newNotes[6] = `${this.notes[6].replace("♯", "")}`;
    } else {
      newNotes[6] = `${this.notes[6]}b`;
    }
    return newNotes;
  }
  lydian() {
    // #4
    const newNotes = [...this.notes];
    if (newNotes[3].includes("b")) {
      newNotes[3] = `${this.notes[3].replace("b", "")}`;
    } else {
      newNotes[3] = `${this.notes[3]}♯`;
    }

    return newNotes;
  }
  mixolydian() {
    // b7
    const newNotes = [...this.notes];
    if (newNotes[6].includes("♯")) {
      newNotes[6] = `${this.notes[6].replace("♯", "")}`;
    } else {
      newNotes[6] = `${this.notes[6]}b`;
    }

    return newNotes;
  }
  aeolian() {
    // b3 b6 b7
    const newNotes = [...this.notes];
    if (newNotes[2].includes("♯")) {
      newNotes[2] = `${this.notes[2].replace("♯", "")}`;
    } else {
      newNotes[2] = `${this.notes[2]}b`;
    }

    if (newNotes[5].includes("♯")) {
      newNotes[5] = `${this.notes[5].replace("♯", "")}`;
    } else {
      newNotes[5] = `${this.notes[5]}b`;
    }

    if (newNotes[6].includes("♯")) {
      newNotes[6] = `${this.notes[6].replace("♯", "")}`;
    } else {
      newNotes[6] = `${this.notes[6]}b`;
    }
    return newNotes;
  }
  locrian() {
    // b2 b3 b5 b6 b7
    const newNotes = [...this.notes];
    if (newNotes[1].includes("♯")) {
      newNotes[1] = `${this.notes[1].replace("♯", "")}`;
    } else {
      newNotes[1] = `${this.notes[1]}b`;
    }

    if (newNotes[2].includes("♯")) {
      newNotes[2] = `${this.notes[2].replace("♯", "")}`;
    } else {
      newNotes[2] = `${this.notes[2]}b`;
    }

    if (newNotes[4].includes("♯")) {
      newNotes[4] = `${this.notes[4].replace("♯", "")}`;
    } else {
      newNotes[4] = `${this.notes[4]}b`;
    }

    if (newNotes[5].includes("♯")) {
      newNotes[5] = `${this.notes[5].replace("♯", "")}`;
    } else {
      newNotes[5] = `${this.notes[5]}b`;
    }

    if (newNotes[6].includes("♯")) {
      newNotes[6] = `${this.notes[6].replace("♯", "")}`;
    } else {
      newNotes[6] = `${this.notes[6]}b`;
    }
    return newNotes;
  }
}
