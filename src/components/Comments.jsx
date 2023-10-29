"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error("data.message");
    throw error;
  }
  return data;
};

export default function Comments({ postSlug }) {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    if (res.ok) {
      setDesc("");
    }
  };

  return (
    <div className="me-3">
      <h1>Comments</h1>
      {status === "authenticated" ? (
        <div className="d-flex align-items-center gap-3">
          <textarea
            className="form-control"
            placeholder="write a comment..."
            rows="4"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className="btn btn-lg btn-success" onClick={handleSubmit}>
            send
          </button>
        </div>
      ) : (
        <div>
          <Link href="/login">Login to write a comment </Link>
        </div>
      )}
      <div className="mt-5">
        {isLoading
          ? "loading..."
          : data?.map((item) => (
              <div key={item._id}>
                <div className="d-flex gap-3">
                  <Image
                    className="rounded-circle"
                    src={item.user?.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <div className="align-self-center text-secondary">
                    <div className="fw-bold">{item.user?.name}</div>
                    <div className="">{item.createdAt.substring(0, 10)}</div>
                  </div>
                </div>
                <p className="mt-2">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
