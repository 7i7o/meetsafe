import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react"

function NavBar() {
  return (
    <div className="absolute left-0 top-0 ml-8 mt-8 flex w-full flex-row space-x-8 text-lg">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="#" className="hover:underline">
        Solutions
      </Link>
      <Link href="#" className="hover:underline">
        Why MeetSafe
      </Link>
      <Link href="/explorer" className="hover:underline">
        Explore
      </Link>
      <button className="hover:underline" onClick={() => signOut()}> Disconnect</button>
    </div>
  );
}

export default NavBar;
