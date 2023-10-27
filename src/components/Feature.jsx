import Image from "next/image";
import React from "react";

export default function Feature() {
  return (
    <div className="mt-3">
      <h1 className="title">
        <span className="fw-bold">Hey, Nafee here!</span> Discover my stories
        and creative ideas
      </h1>
      <div className="mt-5 d-flex align-items-center gap-5">
        <div className="img-container">
          <Image className="object-fit-cover" src="/p1.jpeg" alt="p1" fill />
        </div>
        <div className="text-container">
          <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit </h1>
          <p className="post-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dignissim nunc orci. In tempor eros et libero fermentum, ac
            consequat odio vehicula. Mauris consequat nulla sit amet ex
            ultricies, in varius est rutrum. Duis vitae viverra enim, ut auctor
            ligula.
          </p>
          <div>
            <button className="p-2 border-0 rounded-3 ">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
