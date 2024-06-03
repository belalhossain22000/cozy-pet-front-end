import { baseApi } from "./baseApi"

const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        // get all pet
        getAllUsers: build.query({
            query: () => ({
                url: `/users`,
                method: 'GET',
            }),
            providesTags: ["Users"],
        }),
        // get all pet
        updateUsers: build.mutation({
            query: (payload: any) => {
                return {
                    url: `/user/${payload?.id}`,
                    method: 'PUT',
                    body: { role: payload.role }
                }

            },
            invalidatesTags:["Users"],
        }),
        // get all pet
        updateUsersStatus: build.mutation({
            query: (payload: any) => {
                return {
                    url: `/user/${payload?.id}`,
                    method: 'PUT',
                    body: { isActive: payload.isActive }
                }
            },
            invalidatesTags:["Users"],
        }),


    }),
})

export const { useGetAllUsersQuery, useUpdateUsersMutation, useUpdateUsersStatusMutation } = usersApi