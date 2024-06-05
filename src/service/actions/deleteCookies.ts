'use server';

import { cookies } from 'next/headers';

export const deleteCookies = (key: string) => {
   // keys.forEach((key) => {
      cookies().delete(key);
   // });
};
