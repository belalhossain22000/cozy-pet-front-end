// utils/fetchPets.ts
export const fetchAdoptedPets = async () => {
    return [
      {
        id: 1,
        name: "Bella",
        photo: "/images/bella.jpg",
        adoptionDate: "2023-01-15",
        detailsPage: "/pets/bella",
      },
      {
        id: 2,
        name: "Max",
        photo: "/images/max.jpg",
        adoptionDate: "2023-03-22",
        detailsPage: "/pets/max",
      },
      // Add more pets as needed
    ];
  };
  