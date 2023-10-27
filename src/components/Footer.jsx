import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="row mt-5 footer pb-4 gx-md-5">
      <div className="col-md-6">
        <div className="d-flex align-items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="mb-0 ms-2">NafeeBlog</h1>
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
          distinctio nemo illo dolor iusto eos numquam maxime iste, dignissimos,
          eum veniam optio error labore dolorem nostrum quibusdam aspernatur et?
        </p>
        <div className="d-flex gap-2">
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="row">
          <div className="col-4 d-flex flex-column">
            <div className="mb-2 fs-5 fw-bold">Links</div>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className="col-4 d-flex flex-column">
            <div className="mb-2 fs-5 fw-bold">Tags</div>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
          </div>
          <div className="col-4 d-flex flex-column">
            <div className="mb-2 fs-5 fw-bold">Socials</div>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Tiktok</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
