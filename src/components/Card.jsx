import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ key, item }) {
  return (
    <div className="d-flex align-items-center gap-5 mb-4" key={key}>
      <div className="card-img">
        <Image className="object-fit-cover" src="/p1.jpeg" alt="" fill />
      </div>
      <div className="card-text">
        <div>
          <span className="text-secondary">11.02.2023 - </span>
          <span className="text-danger">Culture</span>
        </div>
        <Link href="/">
          <h1 className="fs-2 fw-bold">{item.title}</h1>
        </Link>
        <p className="card-desc">{item.desc}</p>
        <div>
          <Link className="border-bottom border-danger pb-1" href="/">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
