import NextAuth from "next-auth";
import { authOptions } from "@/server/auth";

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call */
export default async function handler(...params: any[]) {
  await NextAuth(authOptions)(...params);
}
