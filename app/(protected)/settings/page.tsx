import { auth, signOut } from "@/auth";

const Settings = async () => {
  const session = await auth();
  session.user.id;
  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="flex gap-2"
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
};
export default Settings;
