export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/products/:path*', '/cart', '/cekout', '/contact', '/wishlist', '/user:path*'],
};
