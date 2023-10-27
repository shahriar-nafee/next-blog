import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import React from "react";

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-center bg-danger rounded text-white">Style blog</h1>
      <div className="row gx-4">
        <div className="col-md-8">
          <CardList />
        </div>
        <div className="col-md-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}
