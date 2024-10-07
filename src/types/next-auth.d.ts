import { Subscription, User } from '@prisma/client';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User | null;
    subscription: Subscription | null;
  }
}
