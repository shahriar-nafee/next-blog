import Image from "next/image";
import Link from "next/link";
import React from "react";

const bg = [
  "#57c4ff31",
  "#da85c731",
  "#7fb88133",
  "#ff795736",
  "#ffb04f45",
  "#5e4fff31",
];

//create a function to call api for categories

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Faliled");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div>
      <h2 className="my-4 fw-bold">Popular Categories</h2>
      <div className="row">
        {data?.map((category, index) => (
          <div
            className="col-lg-2 col-md-4 col-sm-6 gy-3 gy-lg-0"
            key={category.id}
          >
            <Link
              style={{ backgroundColor: bg[index] }}
              href={`/blog?cat=${category.slug}`}
              className="d-flex align-items-center justify-content-center gap-2 text-capitalize px-5 py-3 rounded-3"
            >
              <Image
                className="rounded-circle"
                src={category.img}
                width={32}
                height={32}
                alt={category.title}
              />
              {category.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
