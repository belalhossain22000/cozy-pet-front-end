import { JwtPayload } from "jwt-decode";

export interface IPet {
    id: string;
    name: string;
    species: string;
    breed: string;
    photo:string;
    age: number;
    size: string;
    location: string;
    description: string;
    temperament: string;
    medicalHistory: string;
    adoptionRequirements: string;
    createdAt: string; 
    updatedAt: string; 
  }
  

  // types.ts
export interface UserInfo extends JwtPayload {
  name: string;
  email: string;
}
