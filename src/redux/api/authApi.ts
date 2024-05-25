import { baseApi } from "./baseApi"

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    // login
    login: build.mutation({
      query: (data:any) =>({
        url: `/login`,
        method: 'POST',
        body: data,
      }),
    }),

    // register
    register: build.mutation({
      query: (data:any) =>({
        url: `/register`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation,useRegisterMutation } = authApi