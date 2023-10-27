import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import AuthLink from "./AuthLink";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="d-none d-md-flex gap-2 flex-grow-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-grow-1 text-md-center fw-bold fs-2">nafeeblog</div>
      <div className=" d-flex gap-3 align-items-center">
        <ThemeToggle />
        <Link href="/" className="d-none d-md-block">
          Homepage
        </Link>
        <Link href="/" className="d-none d-md-block">
          Contact
        </Link>
        <Link href="/" className="d-none d-md-block">
          About
        </Link>
        <AuthLink />
      </div>
    </div>
  );
}
