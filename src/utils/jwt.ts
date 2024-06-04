import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  if (!token) {
   return 'unauthorized access';
}

const parts = token.split('.');
if (parts.length !== 3) {
    return 'unauthorized access';
}

try {
    return jwtDecode(token);
} catch (error) {
    console.error('Failed to decode token:', error);
    return 'unauthorized access';
}
};