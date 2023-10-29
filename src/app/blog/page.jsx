import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import React from "react";

export default function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <h1 className="text-center bg-danger rounded text-white text-capitalize p-2">
        {cat} blog
      </h1>
      <div className="row gx-4">
        <div className="col-md-8">
          <CardList page={page} cat={cat} />
        </div>
        <div className="col-md-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}
