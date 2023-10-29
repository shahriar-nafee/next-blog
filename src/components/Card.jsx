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
          <span className="text-secondary">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-danger text-capitalize">{item.catSlug}</span>
        </div>
        <Link href={`posts/${item.slug}`}>
          <h1 className="fs-2 fw-bold">{item.title}</h1>
        </Link>
        <p className="card-desc">{item.desc}</p>
        <div>
          <Link
            className="border-bottom border-danger pb-1"
            href={`posts/${item.slug}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
