// "use server";

import { FieldValues } from 'react-hook-form';
import setAccessToken from './setAccessToken';

export const usersLogin = async (data: FieldValues) => {
   const res = await fetch(
      `http://localhost:3000/api/login`,
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
         credentials: 'include',
         // cache: "no-store",
      }
   );
   
   const userInfo = await res.json();
   console.log(userInfo)

   if (userInfo.data.token) {
      setAccessToken(userInfo.data.token, {
         redirect: '/dashboard',
      });
   }

   return userInfo;
};
