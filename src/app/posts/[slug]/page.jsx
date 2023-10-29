import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="fw-bold">{data?.title}</h1>
          <div className="d-flex gap-3 mt-md-5">
            <div>
              <Image
                className="rounded-circle border border-3 border-secondary object-fit-cover border-opacity-50"
                src={data?.user?.image}
                alt=""
                width={70}
                height={70}
              />
            </div>
            <div className="align-self-center text-secondary">
              <div className="fw-bold">{data?.user.name}</div>
              <div className="mt-2">11.02.2023</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="object-fit-cover"
            src={"/p1.jpeg"}
            alt=""
            width={400}
            height={220}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mt-5">
          <div className="mb-3">{data?.desc}</div>
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <div className="col-md-4">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
