import type { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

// adequar para as necessidades da aplicação

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: {
          label: 'password',
          type: 'password',
        },
        remember: {
          label: 'remember',
          type: 'checkbox',
        },
      },
      async authorize(credentials) {
        const remember: boolean = credentials!.remember === 'true' ? true : false;

        try {
          const { body }: any = {};

          const formattedUser = {
            token: body.token,
            refreshToken: body.refreshToken,
            expires: body.expiresIn,
            remember,
          };

          const user: User = { ...formattedUser } as any;

          return user;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return {
          ...token,
          user: session.user,
        };
      }

      if (user) {
        token = {
          user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  session: {
    updateAge: 60,
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, nextAuthOptions, handler as POST };
