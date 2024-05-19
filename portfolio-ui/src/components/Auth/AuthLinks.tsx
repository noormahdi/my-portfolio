import { signInAction, signOutAction } from "./authActions";
import { auth } from "@/auth";
export async function LogInOut() {
  const session = await auth();
  console.log(session?.user);
  return (
    <>
      {!session?.user ? (
        <form action={signInAction}>
          <button type="submit">Login</button>
        </form>
      ) : (
        <span>{session.user.name} | <SignOut/></span>
      )}
    </>
  );
}

export function SignOut() {
  return (
    <form action={signOutAction} className="inline-block underline">
      <button type="submit">Logout</button>
    </form>
  );
}
