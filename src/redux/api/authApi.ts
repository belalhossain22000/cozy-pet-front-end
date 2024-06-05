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
      invalidatesTags: ["Auth"],
    }),

    // register
    register: build.mutation({
      query: (data: any) => ({
        url: `/register`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    // register
    updateProfile: build.mutation({
      query: (data: any) => ({
        url: `/profile`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["Auth"],

    }),
    // register
    getMyProfile: build.query({
      query: () => ({
        url: `/profile`,
        method: 'GET',
      }),
      providesTags: ["Auth"],

    }),
    // register
    changePassword: build.mutation({
      query: (data: any) => ({
        url: `/change-password`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation,useUpdateProfileMutation,useChangePasswordMutation,useGetMyProfileQuery } = authApi