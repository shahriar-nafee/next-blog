import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Comments() {
  const status = "authenticated";
  return (
    <div className="me-3">
      <h1>Comments</h1>
      {status === "authenticated" ? (
        <div className="d-flex align-items-center gap-3">
          <textarea
            className="form-control"
            placeholder="write a comment..."
            rows="4"
          ></textarea>
          <button className="btn btn-lg btn-success">send</button>
        </div>
      ) : (
        <div>
          <Link href="/login">Login to write a comment </Link>
        </div>
      )}
      <div className="mt-5">
        <div>
          <div className="d-flex gap-3">
            <Image
              className="rounded-circle"
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className="align-self-center text-secondary">
              <div className="fw-bold">John Doe</div>
              <div className="">11.02.2023</div>
            </div>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            iusto cumque aspernatur obcaecati voluptate vel. Illo perferendis
            dolorum, dolore assumenda quo, dolores at sequi obcaecati incidunt
            deleniti dignissimos reprehenderit placeat?
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <div className="d-flex gap-3">
            <Image
              className="rounded-circle"
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className="align-self-center text-secondary">
              <div className="fw-bold">John Doe</div>
              <div className="">11.02.2023</div>
            </div>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            iusto cumque aspernatur obcaecati voluptate vel. Illo perferendis
            dolorum, dolore assumenda quo, dolores at sequi obcaecati incidunt
            deleniti dignissimos reprehenderit placeat?
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <div className="d-flex gap-3">
            <Image
              className="rounded-circle"
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className="align-self-center text-secondary">
              <div className="fw-bold">John Doe</div>
              <div className="">11.02.2023</div>
            </div>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            iusto cumque aspernatur obcaecati voluptate vel. Illo perferendis
            dolorum, dolore assumenda quo, dolores at sequi obcaecati incidunt
            deleniti dignissimos reprehenderit placeat?
          </p>
        </div>
      </div>
    </div>
  );
}
