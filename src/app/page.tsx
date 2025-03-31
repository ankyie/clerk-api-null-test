import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>This is Home Page</div>
      <div>
        <Link href={"/testlist"}>Go to Test List: </Link>
      </div>
      <SignOutButton>
        <button className="cursor-pointer">Logout</button>
      </SignOutButton>
    </main>
  );
}
