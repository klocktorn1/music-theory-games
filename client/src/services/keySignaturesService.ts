import axios from "axios"
import { KeySignature } from "../models/KeySignature"
import { BASE_URL, handleRequest } from "./baseService"

export const getAllKeys = async () => {
    const response: KeySignature[] = await handleRequest(axios.get(`${BASE_URL}/key_signatures`))
    return response
}