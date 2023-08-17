import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="absolute left-0 top-0 mt-8 flex w-full flex-row space-x-8 pl-8 text-lg">
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
    </div>
  );
}

export default NavBar;
