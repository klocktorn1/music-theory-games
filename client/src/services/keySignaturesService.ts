import axios from "axios"
import { IKeySignatures } from "../models/IKeySignatures"
import { BASE_URL, handleRequest } from "./baseService"

export const getAllKeys = async () => {
    const response: IKeySignatures[] = await handleRequest(axios.get(`${BASE_URL}/key_signatures`))
    return response
}