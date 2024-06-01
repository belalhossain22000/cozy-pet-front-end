import { baseApi } from "./baseApi"

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    // login
    login: build.mutation({
      query: (data: any) => ({
        url: `/login`,
        method: 'POST',
        body: data,
      }),
    }),

    // register
    register: build.mutation({
      query: (data: any) => ({
        url: `/register`,
        method: 'POST',
        body: data,
      }),
    }),
    // register
    updateProfile: build.mutation({
      query: (data: any) => ({
        url: `/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation,useUpdateProfileMutation } = authApi