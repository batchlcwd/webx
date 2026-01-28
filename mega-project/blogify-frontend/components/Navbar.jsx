import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex h-16  border-b border-gray-600 justify-around items-center">
      <div>
        <h1 className="text-3xl">Blogify</h1>
      </div>

      <ul className="flex justify-between gap-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>

      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-4 flex-wrap">
            <Link className="" href={"/sign-in"}>
              Sign In
            </Link>
            <SignUpButton className="cursor-pointer" />
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navbar;
