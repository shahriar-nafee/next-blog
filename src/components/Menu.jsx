import Image from "next/image";
import Link from "next/link";
import React from "react";

const category = [
  { name: "style", bg: "#57c4ff31" },
  { name: "fashion", bg: "#da85c731" },
  { name: "travel", bg: "#7fb88133" },
  { name: "food", bg: "#ff795736" },
  { name: "culture", bg: "#ffb04f45" },
  { name: "coding", bg: "#5e4fff31" },
];

export default function Menu() {
  return (
    <div className="mt-5">
      <h3 className="text-secondary fs-6 mb-0">{"What's hot"}</h3>
      <h3 className="fw-bold">Most Popular</h3>
      <div>
        <Link href="/" className="d-flex align-items-center gap-2">
          <div className="menu-img">
            <Image
              className="rounded-circle border border-3 border-secondary object-fit-cover border-opacity-50"
              src="/p1.jpeg"
              alt=""
              fill
            />
          </div>
          <div className="menu-text-container">
            <span className="menu-category">Travel</span>
            <h4 className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div>
              <span className="">John Doe</span>
              <span className="text-secondary"> - 10.02.2023</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-5">
        <h3 className="text-secondary fs-6 mb-0">{"Discover by topic"}</h3>
        <h3 className="fw-bold">Categories</h3>
        <div className="row mt-3">
          {category?.map((category) => (
            <div className="col-md-4 col-sm-6 g-4" key={category.name}>
              <Link
                href={`/blog`}
                style={{ backgroundColor: category.bg }}
                className="text-capitalize  rounded px-4 py-2"
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
