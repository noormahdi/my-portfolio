"use server";
import { signIn, signOut } from "@/auth";
export async function signInAction(formData: FormData) {
  await signIn("azure-ad-b2c", undefined, { prompt: "login" });
}
export async function signOutAction(formData: FormData) {
  await signOut();
}
