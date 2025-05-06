import { ObjectId } from "mongodb"





export interface IKeySignature {
    _id: ObjectId,
    name: string
    notes: string[]
    minorParallel: string
}