import { loginUser } from '@/src/utils/fetchApi';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const nextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: {
          type: 'email',
          placeholder: 'Email',
        },
        password: {
          type: 'password',
          placeholder: 'Enter Password',
        },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;
        const response = await loginUser(email, password);
        const data = await response.json();
        if (response?.ok) {
          return data.data;
        } else {
          throw new Error(data.message);
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.user.id_user;
      session.user.accessToken = token.access_token;
      session.user.name = token.user.name;
      session.user.role = token.user.role;
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(nextAuthOptions);
