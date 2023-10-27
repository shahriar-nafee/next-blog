import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export default function AuthLink() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="d-none d-md-block">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="d-none d-md-block">
            write
          </Link>
          <span role="button" className="d-none d-md-block" onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className="d-flex d-md-none burger" onClick={() => setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {open && (
        <div className="responsive-menu">
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauth" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">write</Link>
              <span role="button">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
