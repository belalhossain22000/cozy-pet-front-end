import { baseApi } from "./baseApi"

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    // get all pet
    getAllPets: build.query({
      query: () =>({
        url: `/pets`,
        method: 'GET',
      }),
    }),

    // get single pet
    getSinglePet: build.query({
      query: (id:string) =>({
        url: `/pets/${id}`,
        method: 'GET',
      }),
    }),
    // get single pet
    petAdoptionRequest: build.mutation({
      query: (data:any) =>({
        url: `/adoption-request`,
        method: 'POST',
        body: data,
      }),
    }),

    // get single pet
    getPetAdoptionRequest: build.query({
      query: () =>({
        url: `/user/adoption`,
        method: 'GET',
      }),
    }),

  }),
})

export const { useGetAllPetsQuery,useGetSinglePetQuery,usePetAdoptionRequestMutation,useGetPetAdoptionRequestQuery } = petApi