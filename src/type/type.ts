export interface IPet {
    id: string;
    name: string;
    species: string;
    breed: string;
    age: number;
    size: string;
    location: string;
    description: string;
    temperament: string;
    medicalHistory: string;
    adoptionRequirements: string;
    createdAt: string; // Consider using Date type if you plan to work with date objects
    updatedAt: string; // Consider using Date type if you plan to work with date objects
  }
  