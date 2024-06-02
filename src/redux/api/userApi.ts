import { baseApi } from "./baseApi"

const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        // get all pet
        getAllUsers: build.query({
            query: () => ({
                url: `/users`,
                method: 'GET',
            }),
        }),
        // get all pet
        updateUsers: build.mutation({
            query: (payload: any) => {
                console.log(payload.role);
                return {
                    url: `/user/${payload?.id}`,
                    method: 'PUT',
                    body: { role: payload.role }
                }
            },
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
        }),


    }),
})

export const { useGetAllUsersQuery, useUpdateUsersMutation, useUpdateUsersStatusMutation } = usersApi