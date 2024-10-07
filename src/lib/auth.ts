// Third-party Imports
import GoogleProvider from 'next-auth/providers/google';
import VkProvider from 'next-auth/providers/vk';
import YandexProvider from 'next-auth/providers/yandex';

import type { NextAuthOptions } from 'next-auth';
import { createLoginData } from '@/app/server/user';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
    {
      id: 'mailru',
      name: 'Mail.ru',
      type: 'oauth',
      clientId: process.env.MAILRU_CLIENT_ID,
      clientSecret: process.env.MAILRU_CLIENT_SECRET,
      authorization: 'https://oauth.mail.ru/login',
      token: 'https://oauth.mail.ru/token',
      userinfo: {
        async request(context) {
          const res = await fetch(
            `https://oauth.mail.ru/userinfo?access_token=${context.tokens.access_token}`,
          );
          return await res.json();
        },
      },
      profile: (profile) => profile,
    },
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
      }

      return token;
    },
    async session({ session }) {
      const [user, subscription] = await createLoginData({
        email: session.user?.email,
        name: session.user?.name,
        image: session.user?.image,
      });
      session.user = !!user ? { ...user } : null;
      session.subscription = !!subscription ? { ...subscription } : null;

      return session;
    },
  },
};
