import { decodedToken } from "./jwt"
import { getFromLocalStorage } from "./localStorage"

export const getUser = () => {
    const token = getFromLocalStorage("accessToken")
    if (!token) {
        return alert("unauthorized access")
    }
    const user = decodedToken(token)
    if (!user) {
        return alert("user not found")
    }
    return user
}