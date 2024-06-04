import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://coxy-pet.vercel.app/api',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('authorization', ` ${token}`);
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
    tagTypes: ["Users", "Pets", "AdoptionRequests","Auth"],
})

