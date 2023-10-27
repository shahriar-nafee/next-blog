"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();
  return (
    <div className="d-flex justify-content-between">
      <button
        disabled={!hasPrev}
        className="btn btn-danger"
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className="btn btn-danger"
        onClick={() => {
          router.push(`?page=${page + 1}`);
        }}
      >
        Next
      </button>
    </div>
  );
}
