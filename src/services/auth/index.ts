import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/nodemailer'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '../database'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: ' /app',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server:
        'smtp://MS_AzkfZA@trial-o65qngkv1r3lwr12.mlsender.net:60vGtlecDWO2bzCp@smtp.mailersend.net:587',
      from: 'MS_AzkfZA@trial-o65qngkv1r3lwr12.mlsender.net',
    }),
  ],
  trustHost: true,
})
