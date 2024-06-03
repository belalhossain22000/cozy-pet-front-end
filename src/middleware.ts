import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decodedToken } from './utils/jwt';

const AuthRoutes = ['/login', '/register'];
const adminRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const accessToken = request.cookies.get('accessToken')?.value;
    if (!accessToken) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    let decodedData = null;

    if (accessToken) {
        decodedData = decodedToken(accessToken) as any;
    }
    console.log(decodedData, accessToken);

    const role = decodedData?.role;

    if (role === 'ADMIN' && adminRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ['/login', '/register', '/dashboard/:path*'],
};
