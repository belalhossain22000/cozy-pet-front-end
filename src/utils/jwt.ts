import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  if (!token) {
    throw new Error('Token is required');
}

const parts = token.split('.');
if (parts.length !== 3) {
    throw new Error('Invalid token format');
}

try {
    return jwtDecode(token);
} catch (error) {
    console.error('Failed to decode token:', error);
    throw new Error('Invalid token');
}
};