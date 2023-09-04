import NextAuth from "next-auth";
import { authOptions } from "@/server/auth";

/* eslint-disable no-explicit-any no-unsafe-call */
export default async function handler(...params: any[]) {
  await NextAuth(authOptions)(...params);
}
