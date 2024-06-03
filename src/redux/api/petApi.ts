import { baseApi } from "./baseApi"

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    // get all pet
    getAllPets: build.query({
      query: () =>({
        url: `/pets`,
        method: 'GET',
      }),
      providesTags: ["Pets"],
    }),

    // get single pet
    getSinglePet: build.query({
      query: (id:string) =>({
        url: `/pets/${id}`,
        method: 'GET',
      }),
      providesTags: ["Pets"],
    }),
    // get single pet
    petAdoptionRequest: build.mutation({
      query: (data:any) =>({
        url: `/adoption-request`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Pets", "AdoptionRequests"],
    }),
    // get single pet
    AddPet: build.mutation({
      query: (data:any) =>({
        url: `/pets`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Pets"],
    }),
    // get single pet
    updatePet: build.mutation({
      query: (data:any) =>{
        console.log("from redux",data.updatedDAta)
        return{
        url: `/pets/${data?.id}`,
        method: 'PUT',
        body: data.updatedDAta,
      }},
      invalidatesTags: ["Pets"],
    }),
    // get single pet
    deletePet: build.mutation({
      query: (id:string) =>{ 
        return{
        url: `/pets/delete/${id}`,
        method: 'DELETE',
      
      }},
      invalidatesTags: ["Pets"],
    }),

    // get single pet
    getPetAdoptionRequest: build.query({
      query: () =>({
        url: `/user/adoption`,
        method: 'GET',
      }),
      providesTags: ["AdoptionRequests"],
    }),

  }),
})

export const { useGetAllPetsQuery,useGetSinglePetQuery,usePetAdoptionRequestMutation,useGetPetAdoptionRequestQuery,useAddPetMutation,useUpdatePetMutation,useDeletePetMutation } = petApi